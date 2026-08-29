import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'stride-cart'

function loadInitialCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function lineId(productId, size) {
  return `${productId}-${size}`
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const id = lineId(action.product.id, action.size)
      const existing = state.find((item) => item.lineId === id)
      if (existing) {
        return state.map((item) =>
          item.lineId === id
            ? { ...item, qty: Math.min(item.qty + action.qty, action.product.stock) }
            : item
        )
      }
      return [
        ...state,
        { ...action.product, size: action.size, qty: action.qty, lineId: id }
      ]
    }
    case 'REMOVE':
      return state.filter((item) => item.lineId !== action.lineId)
    case 'UPDATE_QTY':
      return state.map((item) =>
        item.lineId === action.lineId
          ? { ...item, qty: Math.max(1, Math.min(action.qty, item.stock)) }
          : item
      )
    case 'CLEAR':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, undefined, loadInitialCart)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  const totals = useMemo(() => {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0)
    const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0)
    return { totalItems, totalPrice }
  }, [cart])

  const value = {
    cart,
    totalItems: totals.totalItems,
    totalPrice: totals.totalPrice,
    addToCart: (product, size, qty = 1) => dispatch({ type: 'ADD', product, size, qty }),
    removeFromCart: (lineId) => dispatch({ type: 'REMOVE', lineId }),
    updateQty: (lineId, qty) => dispatch({ type: 'UPDATE_QTY', lineId, qty }),
    clearCart: () => dispatch({ type: 'CLEAR' })
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside a CartProvider')
  return ctx
}
