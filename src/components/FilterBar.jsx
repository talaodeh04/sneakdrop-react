export default function FilterBar({ categories, active, onSelect }) {
  return (
    <div className="filter-bar" role="tablist" aria-label="Filter by category">
      <button
        className={`filter-chip ${active === 'All' ? 'is-active' : ''}`}
        onClick={() => onSelect('All')}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-chip ${active === category ? 'is-active' : ''}`}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
