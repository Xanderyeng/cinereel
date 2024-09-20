import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://cinema-reelflix.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://cinema-reelflix.vercel.app/movies',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://cinema-reelflix.vercel.app/tvshows',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://cinema-reelflix.vercel.app/about',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    
  ]
}