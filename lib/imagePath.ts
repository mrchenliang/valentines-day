/**
 * Get the correct image path that works in both dev and production
 */
export function getImagePath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // Check if we're in the browser
  if (typeof window !== 'undefined') {
    // Check if the current path starts with /valentines-day
    const currentPath = window.location.pathname
    if (currentPath.startsWith('/valentines-day')) {
      return `/valentines-day/${cleanPath}`
    }
  }
  
  // For localhost or server-side, use path without basePath
  return `/${cleanPath}`
}
