import { useEffect, useState } from 'react'

export default function SearchBar({ onSearch, placeholder = 'Search sneakers or brand' }) {
  const [value, setValue] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => onSearch(value.trim()), 300)
    return () => clearTimeout(timer)
  }, [value, onSearch])

  return (
    <div className="search-bar">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        aria-label="Search the catalog"
      />
      {value && (
        <button className="clear-btn" onClick={() => setValue('')} aria-label="Clear search">
          ×
        </button>
      )}
    </div>
  )
}
