import fallbackImage from '../assets/image-fallback.svg'
import { useNavigate } from 'react-router-dom'
import { CATEGORIES } from '../data/sneakers.js'

const CATEGORY_IMAGES = {
    Running: 'https://thumbs.dreamstime.com/b/close-up-running-shoe-sole-asphalt-road-close-up-sneakers-walking-wet-asphalt-blurred-background-sports-shoe-sole-405289742.jpg',
    Basketball: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCmvG3zFDp_Bb1i_wyXN7MyyVjFe-EYU7dKka0KVR_Rh4M1xAHu0GdNc&s=10',
    Skate: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSzoWrApBAaq3jYDdxDou4D2SarVWPW_e3f3ob_iwfwJltiskHWv2SgENP&s=10',
    Lifestyle: 'https://cdn.shopify.com/s/files/1/0848/4896/7960/files/About_Us_-_IMAGE_DESKTOP_SHOE_CLOSE_UP.png?v=1762149250'
}

export default function CategoryShowcase({ onSelectCategory }) {
    const navigate = useNavigate()

    function handleClick(category) {
        onSelectCategory(category)
        navigate('/#trending')
        document.getElementById('trending')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="category-showcase">
            <div className="section-heading">
                <h2>Shop by category</h2>
                <p>Jump straight to the pairs built for what you actually do.</p>
            </div>

            <div className="category-grid">
                {CATEGORIES.map((category) => (
                    <button
                        key={category}
                        className="category-tile"
                        onClick={() => handleClick(category)}
                    >
                        <img
                            src={CATEGORY_IMAGES[category]}
                            alt={category}
                            loading="lazy"
                            onError={(event) => {
                                event.currentTarget.onerror = null
                                event.currentTarget.src = fallbackImage
                            }}
                        />                        <span className="category-tile-label">{category}</span>
                    </button>
                ))}
            </div>
        </section>
    )
}