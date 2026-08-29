import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Cart() {
  const { cart, totalPrice, removeFromCart, updateQty, clearCart } = useCart()
  const [checkedOut, setCheckedOut] = useState(false)

  if (checkedOut) {
    return (
      <div className="page">
        <div className="checkout-success">
          <h1>Order placed.</h1>
          <p>This is a demo checkout — nothing was actually charged or shipped.</p>
          <Link to="/" className="btn" onClick={() => setCheckedOut(false)}>
            Keep shopping
          </Link>
        </div>
      </div>
    )
  }

  if (cart.length === 0) {
    return (
      <div className="page">
        <p className="state-msg">Your cart is empty.</p>
        <Link to="/" className="btn">Browse the shop</Link>
      </div>
    )
  }

  return (
    <div className="page">
      <h1>Your cart</h1>

      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.lineId} className="cart-row">
            <img src={item.image} alt={item.name} className="cart-row-image" />
            <div className="cart-row-info">
              <Link to={`/pair/${item.id}`}>{item.name}</Link>
              <span className="cart-row-artist">{item.colorway} · Size {item.size}</span>
            </div>

            <div className="stepper">
              <button onClick={() => updateQty(item.lineId, item.qty - 1)} aria-label="Decrease quantity">−</button>
              <span>{item.qty}</span>
              <button onClick={() => updateQty(item.lineId, item.qty + 1)} aria-label="Increase quantity">+</button>
            </div>

            <span className="cart-row-price">${item.price * item.qty}</span>

            <button className="link-btn" onClick={() => removeFromCart(item.lineId)}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="cart-summary">
        <button className="link-btn" onClick={clearCart}>Clear cart</button>
        <div className="cart-total">
          <span>Total</span>
          <strong>${totalPrice}</strong>
        </div>
        <button className="btn" onClick={() => setCheckedOut(true)}>
          Checkout
        </button>
      </div>
    </div>
  )
}