# Stride Co. — Sneaker Drop Storefront

A full sneaker-drop storefront built with React + Vite. No backend — the catalog lives in `src/data/sneakers.js` and is served through a simulated async fetch (`useFetch`). Includes light/dark theming, wishlist, reviews, and a responsive mobile nav.

## Run it locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
public/
  favicon.svg           tab icon, matches the brand mark

src/
  components/
    Navbar.jsx           sticky header, mobile hamburger menu, theme toggle, live cart/wishlist counts
    Hero.jsx              hero section with the featured limited drop
    CountdownTimer.jsx    live countdown to a drop's release
    StatCounter.jsx       animated count-up stat block
    CategoryShowcase.jsx  browse-by-category tiles
    Lookbook.jsx           editorial photo grid
    Testimonials.jsx       customer quote cards
    FAQAccordion.jsx       collapsible FAQ list
    FeatureBlocks.jsx     static "why shop here" section
    NewsletterForm.jsx    email signup form with validation + fake submit
    Footer.jsx             site footer
    Card.jsx                reusable sneaker card, tinted per product via --product-accent
    SkeletonCard.jsx       pulsing placeholder card shown while the catalog loads
    SearchBar.jsx           debounced search input
    FilterBar.jsx           category filter chips
    Badge.jsx                small reusable pill label
  pages/
    Home.jsx                hero, stats, categories, trending grid, lookbook, testimonials, FAQ, newsletter
    Details.jsx              single pair page: size picker, quantity, reviews, related pairs
    Cart.jsx                  CRUD cart: update quantity, remove, clear, checkout
    Wishlist.jsx              saved pairs, add/remove via the heart button
  context/
    ThemeContext.jsx        light/dark mode, persisted to localStorage
    ProductsContext.jsx     fetches the catalog once, shares it via useContext
    CartContext.jsx          cart state via useReducer + localStorage persistence
    WishlistContext.jsx      wishlist state, persisted to localStorage
  hooks/
    useFetch.js               generic hook for simulated async data loading
    useCountdown.js           custom hook that ticks down to a target date
  utils/
    imageFallback.js          local SVG placeholder swapped in on broken image links
  data/
    sneakers.js                the local "database" + fake fetch functions
  App.jsx                       routes (react-router-dom)
  main.jsx                       renders App wrapped in all providers + router
  index.css                      all styling, light + dark theme variables
```

## Features

- **Catalog browsing**: search (debounced), category filters, size + price refine filters, sold-out and limited-drop states.
- **Product detail**: size picker, quantity stepper, countdown for unreleased drops, related pairs, reviews list + review form.
- **Cart & wishlist**: full CRUD on the cart (add/update/remove/clear), wishlist toggled from the product card or detail page, both persisted to `localStorage`.
- **Theming**: light/dark mode via `ThemeContext`, plus a per-product accent color (`--product-accent`) that tints each card's top border, colorway dot, price, and CTA button.
- **Resilient images**: every product/category/lookbook image has an `onError` fallback that swaps in a local gradient + icon placeholder — no broken image icons if a hotlinked image fails.
- **Responsive nav**: hamburger menu below 720px, with the menu and toggle button kept independent so the toggle is never hidden inside the collapsed menu.
- **Accessibility**: visible `:focus-visible` outlines on all interactive elements, `aria-expanded`/`aria-controls` on the mobile menu button, skeleton loading state with a screen-reader-only loading announcement.
- **Loading state**: skeleton cards instead of a plain text message while the catalog fetch is in flight.

## Notes

- Cart, wishlist, and theme all persist in `localStorage`, so they survive a page refresh.
- "Checkout," reviews, and the newsletter signup are demo actions — no real payment, email service, or backend is involved.
- The featured "limited drop" release date is set in `src/data/sneakers.js` (`releaseAt` field) — change it to any future date/time to see the countdown in action, or a past date to see the "live now" state.