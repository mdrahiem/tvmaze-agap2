export const BASE_URL: string = 'https://api.tvmaze.com'

// Breakpoints
const breakpoints = [576, 768]

// Media queries
// Usage: ${mq[0]} { ... }
export const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)
