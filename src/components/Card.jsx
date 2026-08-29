import fallbackImage from '../assets/image-fallback.svg'
import { Link } from 'react-router-dom'
import Badge from './Badge.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'

export default function Card({ product }) {
  const outOfStock = product.stock === 0
  const { isWishlisted, toggleWishlist } = useWishlist()
  const saved = isWishlisted(product.id)

  return (
    <article className="card" style={{ '--product-accent': product.accent }}>
      <Link to={`/pair/${product.id}`} className="card-media">
        <img
          src={product.image}
          alt={product.name}
          className="card-image"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = fallbackImage
          }}
        />
        {product.isLimited && <span className="stamp-ribbon">Limited</span>}
        {outOfStock && <span className="out-of-stock-flag">Sold out</span>}
        <button
          type="button"
          className={`wishlist-btn ${saved ? 'is-active' : ''}`}
          onClick={(e) => {
            e.preventDefault()
            toggleWishlist(product.id)
          }}
          aria-label={saved ? 'Remove from wishlist' : 'Add to wishlist'}
          aria-pressed={saved}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
          </svg>
        </button>
      </Link>

      <div className="card-body">
        <div className="card-top-row">
          <Badge tone="muted">{product.category}</Badge>
          <span className="card-rating">★ {product.rating}</span>
        </div>
        <h3 className="card-title">
          <Link to={`/pair/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="card-colorway">{product.colorway}</p>

        <div className="card-footer">
          <span className="card-price">${product.price}</span>
          <Link to={`/pair/${product.id}`} className="btn btn-sm">
            {outOfStock ? 'View pair' : 'Select size'}
          </Link>
        </div>
      </div>
    </article>
  )
}