import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { SIZES, reviewsFor } from '../data/sneakers.js'
import { useProducts } from '../context/ProductsContext.jsx'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import { useCountdown } from '../hooks/useCountdown.js'
import Badge from '../components/Badge.jsx'
import Card from '../components/Card.jsx'

const REVIEWS_STORAGE_KEY = 'stride-submitted-reviews'

function loadSubmittedReviews() {
  try {
    const raw = localStorage.getItem(REVIEWS_STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export default function Details() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { sneakers, loading } = useProducts()
  const { addToCart } = useCart()
  const { isWishlisted, toggleWishlist } = useWishlist()

  const product = sneakers.find((item) => String(item.id) === id)
  const countdown = useCountdown(product?.isLimited ? product.releaseAt : null)

  const [size, setSize] = useState(null)
  const [qty, setQty] = useState(1)
  const [justAdded, setJustAdded] = useState(false)
  const [sizeError, setSizeError] = useState(false)
  const [submittedReviews, setSubmittedReviews] = useState(loadSubmittedReviews)
  const [reviewDraft, setReviewDraft] = useState({ name: '', rating: 5, comment: '' })
  const [reviewSubmitted, setReviewSubmitted] = useState(false)

  useEffect(() => {
    setSize(null)
    setQty(1)
    setJustAdded(false)
    setSizeError(false)
    setReviewSubmitted(false)
    setReviewDraft({ name: '', rating: 5, comment: '' })
  }, [id])

  useEffect(() => {
    if (!justAdded) return
    const timer = setTimeout(() => setJustAdded(false), 2200)
    return () => clearTimeout(timer)
  }, [justAdded])

  if (loading) return <p className="state-msg">Loading pair…</p>

  if (!product) {
    return (
      <div className="page">
        <p className="state-msg state-error">That pair isn't in the catalog.</p>
        <button className="btn" onClick={() => navigate('/')}>Back to shop</button>
      </div>
    )
  }

  const outOfStock = product.stock === 0
  const notYetLive = product.isLimited && !countdown.done
  const related = sneakers
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3)
  const availableSizes = product.availableSizes || SIZES
  const saved = isWishlisted(product.id)

  function handleAddToCart() {
    if (!size) {
      setSizeError(true)
      return
    }
    addToCart(product, size, qty)
    setJustAdded(true)
  }

  function handleReviewSubmit(e) {
    e.preventDefault()
    if (!reviewDraft.name.trim() || !reviewDraft.comment.trim()) return
    const next = {
      ...submittedReviews,
      [product.id]: [
        ...(submittedReviews[product.id] || []),
        { id: `${product.id}-user-${Date.now()}`, ...reviewDraft }
      ]
    }
    setSubmittedReviews(next)
    localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(next))
    setReviewDraft({ name: '', rating: 5, comment: '' })
    setReviewSubmitted(true)
  }

  return (
    <div className="page">
      <Link to="/" className="back-link">← Back to shop</Link>

      <div className="details-layout">
        <img src={product.image} alt={product.name} className="details-image" />

        <div className="details-info">
          <div className="card-top-row">
            <Badge tone="muted">{product.category}</Badge>
            {product.isLimited && <Badge tone="accent">Limited drop</Badge>}
          </div>

          <div className="details-title-row">
            <h1>{product.name}</h1>
            <button
              type="button"
              className={`wishlist-btn wishlist-btn-lg ${saved ? 'is-active' : ''}`}
              onClick={() => toggleWishlist(product.id)}
              aria-label={saved ? 'Remove from wishlist' : 'Add to wishlist'}
              aria-pressed={saved}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
              </svg>
            </button>
          </div>
          <p className="details-artist">{product.brand} · {product.colorway}</p>
          <p className="details-description">{product.description}</p>

          <dl className="spec-list">
            <div><dt>Price</dt><dd>${product.price}</dd></div>
            <div><dt>Rating</dt><dd>★ {product.rating}</dd></div>
            <div><dt>Stock</dt><dd>{outOfStock ? 'Sold out' : `${product.stock} pairs left`}</dd></div>
          </dl>

          {notYetLive && (
            <p className="state-msg state-error">
              This drop isn't live yet — check back in {countdown.days}d {countdown.hours}h.
            </p>
          )}

          {!outOfStock && !notYetLive && (
            <>
              <div className="size-picker">
                <span className="size-picker-label">Select size (US)</span>
                <div className="size-grid">
                  {SIZES.map((s) => {
                    const available = availableSizes.includes(s)
                    return (
                      <button
                        key={s}
                        disabled={!available}
                        className={`size-chip ${size === s ? 'is-active' : ''} ${!available ? 'is-disabled' : ''}`}
                        onClick={() => {
                          setSize(s)
                          setSizeError(false)
                        }}
                      >
                        {s}
                      </button>
                    )
                  })}
                </div>
                {sizeError && <p className="form-msg form-msg-error">Pick a size first.</p>}
              </div>

              <div className="qty-row">
                <div className="stepper">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">−</button>
                  <span>{qty}</span>
                  <button onClick={() => setQty((q) => Math.min(product.stock, q + 1))} aria-label="Increase quantity">+</button>
                </div>
                <button className="btn" onClick={handleAddToCart}>
                  Add {qty} to cart
                </button>
              </div>
            </>
          )}

          {outOfStock && <p className="state-msg state-error">This colorway is currently sold out.</p>}

          {justAdded && <p className="toast-inline">Added size {size} to cart.</p>}
        </div>
      </div>

      <ReviewsSection
        product={product}
        submitted={submittedReviews[product.id] || []}
        draft={reviewDraft}
        onDraftChange={setReviewDraft}
        onSubmit={handleReviewSubmit}
        justSubmitted={reviewSubmitted}
      />

      {related.length > 0 && (
        <section className="related">
          <h2>More in {product.category}</h2>
          <div className="grid">
            {related.map((item) => (
              <Card key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function ReviewsSection({ product, submitted, draft, onDraftChange, onSubmit, justSubmitted }) {
  const reviews = useMemo(() => [...reviewsFor(product), ...submitted], [product, submitted])

  return (
    <section className="reviews">
      <h2>Reviews ({reviews.length})</h2>

      <ul className="review-list">
        {reviews.map((r) => (
          <li key={r.id} className="review-row">
            <div className="review-row-top">
              <span className="review-author">{r.name}</span>
              <span className="review-stars">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</span>
            </div>
            <p className="review-comment">{r.comment}</p>
          </li>
        ))}
      </ul>

      <form className="review-form" onSubmit={onSubmit}>
        <h3>Leave a review</h3>
        <div className="review-form-row">
          <input
            type="text"
            placeholder="Your name"
            value={draft.name}
            onChange={(e) => onDraftChange({ ...draft, name: e.target.value })}
            required
          />
          <select
            value={draft.rating}
            onChange={(e) => onDraftChange({ ...draft, rating: Number(e.target.value) })}
            aria-label="Your rating"
          >
            {[5, 4, 3, 2, 1].map((n) => (
              <option key={n} value={n}>{'★'.repeat(n)} ({n})</option>
            ))}
          </select>
        </div>
        <textarea
          placeholder="How did they fit and wear?"
          value={draft.comment}
          onChange={(e) => onDraftChange({ ...draft, comment: e.target.value })}
          rows={3}
          required
        />
        <button type="submit" className="btn btn-sm">Submit review</button>
        {justSubmitted && <p className="form-msg">Thanks — your review was added above.</p>}
      </form>
    </section>
  )
}