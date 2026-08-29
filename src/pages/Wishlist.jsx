import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductsContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import Card from '../components/Card.jsx'

export default function Wishlist() {
  const { sneakers, loading } = useProducts()
  const { wishlist } = useWishlist()

  const saved = sneakers.filter((item) => wishlist.includes(item.id))

  if (loading) return <p className="state-msg">Loading your list…</p>

  return (
    <div className="page">
      <h1>Your wishlist</h1>

      {saved.length === 0 ? (
        <div className="empty-wishlist">
          <p className="state-msg">Nothing saved yet — tap the heart on any pair to keep it here.</p>
          <Link to="/" className="btn">
            Browse the shop
          </Link>
        </div>
      ) : (
        <div className="grid">
          {saved.map((item) => (
            <Card key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  )
}
