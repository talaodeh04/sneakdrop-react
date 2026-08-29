import { SIZES } from '../data/sneakers.js'

const PRICE_BRACKETS = [
  { id: 'all', label: 'Any price', test: () => true },
  { id: 'under100', label: 'Under $100', test: (p) => p < 100 },
  { id: '100to150', label: '$100–150', test: (p) => p >= 100 && p <= 150 },
  { id: '150to200', label: '$150–200', test: (p) => p > 150 && p <= 200 },
  { id: 'over200', label: '$200+', test: (p) => p > 200 }
]

export { PRICE_BRACKETS }

export default function RefineFilters({ size, onSizeChange, priceBracket, onPriceChange }) {
  return (
    <div className="refine-filters">
      <div className="refine-group">
        <span className="refine-label">Size (US)</span>
        <div className="refine-size-grid">
          <button
            type="button"
            className={`refine-size-chip ${size === null ? 'is-active' : ''}`}
            onClick={() => onSizeChange(null)}
          >
            Any
          </button>
          {SIZES.map((s) => (
            <button
              type="button"
              key={s}
              className={`refine-size-chip ${size === s ? 'is-active' : ''}`}
              onClick={() => onSizeChange(size === s ? null : s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="refine-group">
        <span className="refine-label">Price</span>
        <select
          className="refine-price-select"
          value={priceBracket}
          onChange={(e) => onPriceChange(e.target.value)}
          aria-label="Filter by price"
        >
          {PRICE_BRACKETS.map((b) => (
            <option key={b.id} value={b.id}>
              {b.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
