import { config } from '@/config'

export function useImageUrl() {
  const getFullImageUrl = (path) => {
    if (!path) return ''
    if (path.startsWith('http')) return path
    return `${config.baseURL}${path}`
  }

  return {
    getFullImageUrl
  }
}