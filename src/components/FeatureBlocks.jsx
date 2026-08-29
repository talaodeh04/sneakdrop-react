const FEATURES = [
  {
    title: 'Verified authentic',
    text: 'Every pair is checked against the original factory spec before it ships.',
    icon: (
      <path d="M12 2 L20 6 V12 C20 17 16.5 20.5 12 22 C7.5 20.5 4 17 4 12 V6 Z" />
    )
  },
  {
    title: 'Restocks every Friday',
    text: 'Missed a drop? Most colorways come back around within a few weeks.',
    icon: <path d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5" />
  },
  {
    title: '30-day easy returns',
    text: 'Wrong size or changed your mind — send it back, no questions asked.',
    icon: <path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5" />
  }
]

export default function FeatureBlocks() {
  return (
    <section className="features">
      <h2>Why people keep coming back</h2>
      <div className="feature-grid">
        {FEATURES.map((feature) => (
          <div key={feature.title} className="feature-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="28" height="28">
              {feature.icon}
            </svg>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
