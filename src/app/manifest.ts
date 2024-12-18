import type { MetadataRoute } from 'next'
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Notee',
    short_name: 'Notee',
    description: 'Simple management Invo system for small business',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}