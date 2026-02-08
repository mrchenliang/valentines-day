/**
 * Get the base path for the application
 * In production (GitHub Pages), this will be '/valentines-day'
 * In development (localhost), this will be ''
 */
export function getBasePath(): string {
  // Check if we're in the browser
  if (typeof window !== 'undefined') {
    // Check if the current path starts with /valentines-day
    const path = window.location.pathname
    if (path.startsWith('/valentines-day')) {
      return '/valentines-day'
    }
  }
  
  // For server-side or localhost, return empty string
  return process.env.NODE_ENV === 'production' ? '/valentines-day' : ''
}

/**
 * Create a path with the correct basePath
 */
export function createPath(path: string): string {
  const basePath = getBasePath()
  // Remove leading slash from path if basePath exists
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`
}
