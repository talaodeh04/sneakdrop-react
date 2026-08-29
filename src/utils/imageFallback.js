export function buildFallbackImage(accent = '#3a3f4b') {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${accent}" stop-opacity="0.85" />
        <stop offset="1" stop-color="#12141a" stop-opacity="0.95" />
      </linearGradient>
    </defs>
    <rect width="600" height="450" fill="url(#g)" />
    <path
      d="M120 300 q0 -55 62 -68 l68 -16 q22 -5 40 6 l118 71 q26 15 26 40 v7 h-298 q-16 0 -16 -13 v-27 z"
      fill="#ffffff" fill-opacity="0.16"
    />
    <g stroke="#ffffff" stroke-opacity="0.55" stroke-width="6" stroke-linecap="round">
      <path d="M120 300 q0 -55 62 -68 l68 -16 q22 -5 40 6 l118 71 q26 15 26 40 v7 h-298 q-16 0 -16 -13 v-27 z" fill="none" />
      <line x1="180" y1="218" x2="212" y2="250" />
      <line x1="222" y1="202" x2="260" y2="242" />
    </g>
    <text x="300" y="392" text-anchor="middle" font-family="monospace" font-size="15" fill="#ffffff" fill-opacity="0.55">
      image unavailable
    </text>
  </svg>`

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

export function handleImageError(event, accent) {
  const img = event.currentTarget
  img.onerror = null
  img.src = buildFallbackImage(accent)
}
