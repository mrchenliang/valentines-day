/**
 * Get the correct image path that works in both dev and production
 */
export function getImagePath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path

  // Check if we're in the browser
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname
    const currentPath = window.location.pathname

    // Always use basePath if:
    // 1. We're on GitHub Pages domain (github.io)
    // 2. Current path starts with /valentines-day
    // 3. We're not on localhost
    if (
      hostname.includes('github.io') ||
      currentPath.startsWith('/valentines-day') ||
      (hostname !== 'localhost' && hostname !== '127.0.0.1')
    ) {
      return `/valentines-day/${cleanPath}`
    }
  }

  // For localhost or server-side during dev, use path without basePath
  // But check NODE_ENV as fallback
  if (typeof window === 'undefined' && process.env.NODE_ENV === 'production') {
    return `/valentines-day/${cleanPath}`
  }

  return `/${cleanPath}`
}
