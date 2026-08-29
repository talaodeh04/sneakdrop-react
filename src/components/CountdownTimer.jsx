import { useCountdown } from '../hooks/useCountdown.js'

export default function CountdownTimer({ releaseAt }) {
  const { done, days, hours, minutes, seconds } = useCountdown(releaseAt)

  if (done) {
    return <p className="countdown-live">This pair just went live.</p>
  }

  const units = [
    { label: 'Days', value: days },
    { label: 'Hrs', value: hours },
    { label: 'Min', value: minutes },
    { label: 'Sec', value: seconds }
  ]

  return (
    <div className="countdown">
      {units.map((unit) => (
        <div key={unit.label} className="countdown-unit">
          <span className="countdown-value">{String(unit.value).padStart(2, '0')}</span>
          <span className="countdown-label">{unit.label}</span>
        </div>
      ))}
    </div>
  )
}
