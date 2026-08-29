import { useCallback, useMemo, useState } from 'react'
import { CATEGORIES } from '../data/sneakers.js'
import { useProducts } from '../context/ProductsContext.jsx'
import SearchBar from '../components/SearchBar.jsx'
import FilterBar from '../components/FilterBar.jsx'
import RefineFilters, { PRICE_BRACKETS } from '../components/RefineFilters.jsx'
import Card from '../components/Card.jsx'
import Hero from '../components/Hero.jsx'
import FeatureBlocks from '../components/FeatureBlocks.jsx'
import NewsletterForm from '../components/NewsletterForm.jsx'
import StatCounter from '../components/StatCounter.jsx'
import CategoryShowcase from '../components/CategoryShowcase.jsx'
import Lookbook from '../components/Lookbook.jsx'
import Testimonials from '../components/Testimonials.jsx'
import FAQAccordion from '../components/FAQAccordion.jsx'

export default function Home() {
  const { sneakers, loading, error } = useProducts()
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('All')
  const [sizeFilter, setSizeFilter] = useState(null)
  const [priceBracket, setPriceBracket] = useState('all')

  const handleSearch = useCallback((term) => setSearchTerm(term), [])

  const featured = useMemo(() => {
    const now = Date.now()
    const upcoming = sneakers
      .filter((item) => item.isLimited && item.releaseAt && new Date(item.releaseAt).getTime() > now)
      .sort((a, b) => new Date(a.releaseAt) - new Date(b.releaseAt))
    return upcoming[0] || sneakers.find((item) => item.isLimited) || sneakers[0]
  }, [sneakers])

  const priceTest = PRICE_BRACKETS.find((b) => b.id === priceBracket)?.test || (() => true)

  const filtered = useMemo(() => {
    return sneakers.filter((item) => {
      const matchesCategory = category === 'All' || item.category === category
      const term = searchTerm.toLowerCase()
      const matchesSearch =
        !term ||
        item.name.toLowerCase().includes(term) ||
        item.brand.toLowerCase().includes(term) ||
        item.colorway.toLowerCase().includes(term)
      const matchesSize = sizeFilter === null || (item.availableSizes || []).includes(sizeFilter)
      const matchesPrice = priceTest(item.price)
      return matchesCategory && matchesSearch && matchesSize && matchesPrice
    })
  }, [sneakers, category, searchTerm, sizeFilter, priceBracket])

  return (
    <div className="page page-home">
      {!loading && featured && <Hero product={featured} />}

      <section className="stats-strip">
        <StatCounter target={128} suffix="+" label="Colorways dropped" />
        <StatCounter target={48} suffix="hr" label="Average restock time" />
        <StatCounter target={4} suffix=".9" label="Average rating" />
        <StatCounter target={12} suffix="k" label="Pairs shipped" />
      </section>

      <CategoryShowcase onSelectCategory={setCategory} />

      <section id="trending" className="trending">
        <div className="section-heading">
          <h2>Trending right now</h2>
          <p>Filter by category or search a name, brand, or colorway.</p>
        </div>

        <div className="toolbar">
          <SearchBar onSearch={handleSearch} />
          <FilterBar categories={CATEGORIES} active={category} onSelect={setCategory} />
        </div>

        <RefineFilters
          size={sizeFilter}
          onSizeChange={setSizeFilter}
          priceBracket={priceBracket}
          onPriceChange={setPriceBracket}
        />

        {loading && (
          <div className="grid skeleton-grid" aria-label="Loading products">
            {Array.from({ length: 8 }).map((_, index) => (
              <div className="skeleton-card" key={index}>
                <div className="skeleton-media" />
                <div className="skeleton-body">
                  <div className="skeleton-line skeleton-line-short" />
                  <div className="skeleton-line" />
                  <div className="skeleton-line skeleton-line-medium" />
                  <div className="skeleton-footer">
                    <div className="skeleton-price" />
                    <div className="skeleton-button" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}        {error && <p className="state-msg state-error">Could not load the catalog: {error}</p>}

        {!loading && !error && filtered.length === 0 && (
          <p className="state-msg">No pairs match these filters. Try clearing the size or price filter.</p>
        )}

        {!loading && !error && filtered.length > 0 && (
          <div className="grid">
            {filtered.map((item) => (
              <Card key={item.id} product={item} />
            ))}
          </div>
        )}
      </section>

      <FeatureBlocks />

      <Lookbook />

      <Testimonials />

      <FAQAccordion />

      <section className="newsletter">
        <div className="newsletter-copy">
          <h2>Get the drop alerts first.</h2>
          <p>One email a week, right before each Friday release goes live. No spam, ever.</p>
        </div>
        <NewsletterForm />
      </section>
    </div>
  )
}