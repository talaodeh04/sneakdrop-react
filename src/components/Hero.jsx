import fallbackImage from '../assets/image-fallback.svg'
import { Link } from 'react-router-dom'
import CountdownTimer from './CountdownTimer.jsx'

export default function Hero({ product }) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow">Next drop</span>
        <h1>Own the pair before everyone else does.</h1>
        <p>
          Every Friday we release one pair in limited numbers. Sign up, set a reminder,
          or just keep this tab open — it never lasts the weekend.
        </p>

        {product && (
          <>
            <CountdownTimer releaseAt={product.releaseAt} />
            <div className="hero-actions">
              <Link to={`/pair/${product.id}`} className="btn btn-lg">
                View {product.name}
              </Link>
              <a href="#trending" className="btn btn-ghost btn-lg">
                Browse everything
              </a>
            </div>
          </>
        )}
      </div>

      {product && (
        <div className="hero-visual">
          <img
            src={product.image}
            alt={product.name}
            className="hero-image"
            onError={(event) => {
              event.currentTarget.onerror = null
              event.currentTarget.src = fallbackImage
            }}
          />          <span className="hero-visual-tag">{product.colorway}</span>
        </div>
      )}
    </section>
  )
}