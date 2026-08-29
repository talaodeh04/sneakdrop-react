export const CATEGORIES = ['Running', 'Basketball', 'Skate', 'Lifestyle']

export const SIZES = [7, 8, 9, 10, 11, 12, 13]

function imageFor(seed, category) {
  const topic = `${category.toLowerCase()},sneaker,shoe`
  let hash = 0
  for (let i = 0; i < seed.length; i += 1) hash = (hash * 31 + seed.charCodeAt(i)) % 9973
  return `https://loremflickr.com/600/450/${topic}?lock=${hash}`
}

export const sneakers = [
  {
    id: 1,
    name: 'Orbit Runner',
    brand: 'STRIDE CO.',
    category: 'Running',
    colorway: 'Cobalt / Bone',
    price: 149,
    stock: 6,
    rating: 4.8,
    isLimited: true,
    releaseAt: '2026-06-05T10:00:00',
    description: 'A featherweight trainer built on a dual-density foam stack, tuned for long tempo runs and short recovery windows.',
    accent: '#1C4FD6',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOc6j6SVIKjYtkkdhT3eau01qgXi2zFi0alW5SoJ6c2A&s=10'
  },
  {
    id: 2,
    name: 'Ferox Low',
    brand: 'STRIDE CO.',
    category: 'Basketball',
    colorway: 'Blackout',
    price: 189,
    stock: 0,
    rating: 4.6,
    isLimited: false,
    description: 'Low-cut court shoe with a carbon shank plate for lateral lockdown on hard cuts.',
    accent: '#FF5A1F',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiCupL2eJkXwNH9-FZB83Tedl3IScmuD5pijs5RW6aOkY3no6IkNPG7g&s=10'
  },
  {
    id: 3,
    name: 'Driftline Vulc',
    brand: 'STRIDE CO.',
    category: 'Skate',
    colorway: 'Concrete Grey',
    price: 99,
    stock: 14,
    rating: 4.5,
    isLimited: false,
    description: 'Vulcanized sole with a wide flick zone, built to survive curbs, rails and everything in between.',
    accent: '#2E9E6B',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqpbNWFrkBGT6WEqH_ts38grLEmQzn7J_QEog-Hj8_sw&s'
  },
  {
    id: 4,
    name: 'Nightshade Mid',
    brand: 'STRIDE CO.',
    category: 'Lifestyle',
    colorway: 'Solar Flare',
    price: 129,
    stock: 9,
    rating: 4.7,
    isLimited: false,
    description: 'An off-court mid-top with a knit upper and a chunky retro outsole for everyday rotation.',
    accent: '#FF5A1F',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZrxAVOgG8q-8uuryg3JCf3G9As3nLdUlRoQ-umVfQUA&s=10'
  },
  {
    id: 5,
    name: 'Orbit Runner LX',
    brand: 'STRIDE CO.',
    category: 'Running',
    colorway: 'Frostbyte',
    price: 169,
    stock: 3,
    rating: 4.9,
    isLimited: false,
    description: 'The LX build adds a plated forefoot for a snappier toe-off on race day.',
    accent: '#1C4FD6',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJmD3k2O1sGkw4bOyrsFICcDxdYHvVNQv5in4PvT1NRA&s=10'
  },
  {
    id: 6,
    name: 'Apexform High',
    brand: 'STRIDE CO.',
    category: 'Basketball',
    colorway: 'Voltage Yellow',
    price: 199,
    stock: 5,
    rating: 4.4,
    isLimited: true,
    releaseAt: '2026-09-12T18:00:00',
    description: 'High-top signature build with a full-length air chamber for players who load up on impact.',
    accent: '#E8B90A',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScBSDIzw6QpAviH45o8kTyWiaAQx0_s2u7We9YuFz_Vw&s=10'
  },
  {
    id: 7,
    name: 'Gridwalk 88',
    brand: 'STRIDE CO.',
    category: 'Lifestyle',
    colorway: 'Bone / Clay',
    price: 119,
    stock: 11,
    rating: 4.3,
    isLimited: false,
    description: 'A reissue of the archive 88 last with a softer collar foam for all-day wear.',
    accent: '#B5651D',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuV4kcbOZuh1OTLAvA14U6wfjviXjqqpctRuUpdwjWeg&s'
  },
  {
    id: 8,
    name: 'Driftline Pro',
    brand: 'STRIDE CO.',
    category: 'Skate',
    colorway: 'Blackout',
    price: 109,
    stock: 0,
    rating: 4.6,
    isLimited: false,
    description: 'Pro build of the Driftline with a reinforced ollie zone and grippier cupsole.',
    accent: '#2E9E6B',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuoM0EFoGbmDNdjSuWhbA8Zbd7IIjY3aoH6G50kLyli4pExvfwCNNs3NIJ&s=10'
  },
  {
    id: 9,
    name: 'Ferox Zero',
    brand: 'STRIDE CO.',
    category: 'Basketball',
    colorway: 'Cobalt / Bone',
    price: 179,
    stock: 8,
    rating: 4.5,
    isLimited: false,
    description: 'A zero-drop court shoe designed for guards who play closer to the floor.',
    accent: '#1C4FD6',
    image:'https://nb.scene7.com/is/image/NB/uhsl3zp_nb_02_i?$pdpflexf2$&wid=440&hei=440'
  },
  {
    id: 10,
    name: 'Nightshade Low',
    brand: 'STRIDE CO.',
    category: 'Lifestyle',
    colorway: 'Frostbyte',
    price: 119,
    stock: 15,
    rating: 4.2,
    isLimited: false,
    description: 'The everyday low-top version of the Nightshade, built for rotation not rest days.',
    accent: '#1C4FD6',
    image: 'https://shopnicekicks.com/cdn/shop/files/7e241a8cbe5dad61ce521072602815c2_800x.jpg?v=1730242598'
  },
  {
    id: 11,
    name: 'Orbit Trail',
    brand: 'STRIDE CO.',
    category: 'Running',
    colorway: 'Concrete Grey',
    price: 159,
    stock: 7,
    rating: 4.7,
    isLimited: false,
    description: 'Lugged outsole variant of the Orbit line built for loose gravel and wet roots.',
    accent: '#2E9E6B',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGwNbOOsgfOf5IxKEjjCKc2Bj9QTFp-mtiEN3w95vsQ&s'
  },
  {
    id: 12,
    name: 'Apexform Low',
    brand: 'STRIDE CO.',
    category: 'Basketball',
    colorway: 'Solar Flare',
    price: 169,
    stock: 4,
    rating: 4.3,
    isLimited: false,
    description: 'A lower-profile cut of the Apexform for players who want less shoe and more feel.',
    accent: '#FF5A1F',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_3RWNjX78LIm43EYXIqNi6yakjnuc0gKBvS4eswy7abePjbiOCI9Ruk&s=10'
  },
  {
    id: 13,
    name: 'Gridwalk Slip',
    brand: 'STRIDE CO.',
    category: 'Lifestyle',
    colorway: 'Voltage Yellow',
    price: 89,
    stock: 20,
    rating: 4.1,
    isLimited: false,
    description: 'A laceless slip cut of the Gridwalk for short errands and long layovers.',
    accent: '#E8B90A',
    image: 'https://neemans.com/cdn/shop/files/RBVSOBR.YELLOW_4.jpg?v=1783588861&width=1600'
  },
  {
    id: 14,
    name: 'Driftline Kids',
    brand: 'STRIDE CO.',
    category: 'Skate',
    colorway: 'Bone / Clay',
    price: 79,
    stock: 10,
    rating: 4.0,
    isLimited: false,
    description: 'A scaled-down Driftline for the next generation of curb enthusiasts.',
    accent: '#B5651D',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRymLESYc9A4BDmLRi0qND5S8FF6wFzp6Brgqu6XQKsbQ&s=10'
  },
  {
    id: 15,
    name: 'Orbit Runner GTX',
    brand: 'STRIDE CO.',
    category: 'Running',
    colorway: 'Blackout',
    price: 189,
    stock: 2,
    rating: 4.8,
    isLimited: false,
    description: 'A weatherproofed Orbit build for runners who do not take rain days.',
    accent: '#1C4FD6',
    image: 'https://empr.store/cdn/shop/files/salomon-sportstyle-xt-4-og-gtx-black-black-black-side-profile.webp?v=1784149558&width=1024'
  },
  {
    id: 16,
    name: 'Nightshade Platform',
    brand: 'STRIDE CO.',
    category: 'Lifestyle',
    colorway: 'Cobalt / Bone',
    price: 139,
    stock: 6,
    rating: 4.5,
    isLimited: false,
    description: 'A stacked-sole Nightshade for anyone who wants a little more height in rotation.',
    accent: '#1C4FD6',
    image: 'https://images.tokopedia.net/img/cache/700/aphluv/1997/1/1/2908241470344766a40ea1202b4abe69~.jpeg'
  }
]

const REVIEW_POOL = [
  { name: 'Yousef K.', comment: 'True to size and the sole held up way better than I expected after a month of daily wear.' },
  { name: 'Lina M.', comment: 'Comfortable out of the box, no break-in period. Colorway looks even better in person.' },
  { name: 'Omar S.', comment: 'Great pickup for the price. Shipping was fast and the box itself felt premium.' },
  { name: 'Rana A.', comment: 'Runs slightly narrow — I sized up half a size and it fit perfectly.' },
  { name: 'Tariq H.', comment: 'Grip is solid, not slippery at all. Exactly what I wanted for daily use.' },
  { name: 'Dana F.', comment: 'Cushioning is soft without feeling mushy. Would buy this colorway again.' }
]

export function reviewsFor(product) {
  const count = 2 + (product.id % 3)
  const start = product.id % REVIEW_POOL.length
  const picks = []
  for (let i = 0; i < count; i += 1) {
    const base = REVIEW_POOL[(start + i) % REVIEW_POOL.length]
    const ratingJitter = ((product.id + i) % 3) - 1 
    picks.push({
      id: `${product.id}-seed-${i}`,
      name: base.name,
      comment: base.comment,
      rating: Math.max(3, Math.min(5, Math.round(product.rating) + ratingJitter))
    })
  }
  return picks
}

function withAvailability(product) {
  if (product.stock === 0) return { ...product, availableSizes: [] }
  const startIndex = product.id % SIZES.length
  const span = 4 + (product.id % 3) 
  const availableSizes = Array.from({ length: span }, (_, i) => SIZES[(startIndex + i) % SIZES.length]).sort(
    (a, b) => a - b
  )
  return { ...product, availableSizes }
}

const sneakersWithAvailability = sneakers.map(withAvailability)

export function fetchSneakers() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(sneakersWithAvailability), 700)
  })
}

export function fetchSneakerById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const found = sneakersWithAvailability.find((item) => String(item.id) === String(id))
      if (found) resolve(found)
      else reject(new Error('Pair not found'))
    }, 450)
  })
}