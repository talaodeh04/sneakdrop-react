import { useEffect, useRef, useState } from 'react'

export default function StatCounter({ target, suffix = '', label }) {
  const [value, setValue] = useState(0)
  const frame = useRef(null)

  useEffect(() => {
    const duration = 1100
    const start = performance.now()

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) frame.current = requestAnimationFrame(tick)
    }

    frame.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame.current)
  }, [target])

  return (
    <div className="stat">
      <span className="stat-value">{value}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}
