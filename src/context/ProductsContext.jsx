import { createContext, useContext } from 'react'
import { useFetch } from '../hooks/useFetch.js'
import { fetchSneakers } from '../data/sneakers.js'

const ProductsContext = createContext(null)

export function ProductsProvider({ children }) {
  const { data, loading, error } = useFetch(fetchSneakers, [])

  const value = {
    sneakers: data || [],
    loading,
    error
  }

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}

export function useProducts() {
  const ctx = useContext(ProductsContext)
  if (!ctx) throw new Error('useProducts must be used inside a ProductsProvider')
  return ctx
}
