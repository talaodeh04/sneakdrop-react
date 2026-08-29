import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import { useTheme } from '../context/ThemeContext.jsx'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { totalItems } = useCart()
  const { wishlist } = useWishlist()
  const { theme, toggleTheme } = useTheme()

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <NavLink to="/" className="brand" onClick={closeMenu}>
        <span className="brand-mark">S</span>
        STRIDE CO.
      </NavLink>

      <div className="navbar-actions">
        <nav id="primary-nav" className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <NavLink to="/" end onClick={closeMenu} className={({ isActive }) => (isActive ? 'is-active' : '')}>
            Shop
          </NavLink>
          <NavLink to="/wishlist" onClick={closeMenu} className={({ isActive }) => (isActive ? 'is-active' : '')}>
            Wishlist
            {wishlist.length > 0 && <span className="cart-count">{wishlist.length}</span>}
          </NavLink>
          <NavLink to="/cart" onClick={closeMenu} className={({ isActive }) => (isActive ? 'is-active' : '')}>
            Cart
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </NavLink>
        </nav>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle light and dark mode"
        >
          {theme === 'dark' ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
        >
          {menuOpen ? '×' : '☰'}
        </button>
      </div>
    </header>
  )
}