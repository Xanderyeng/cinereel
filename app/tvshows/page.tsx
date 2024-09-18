import { Suspense } from 'react'
import PageLoading from '@/components/PageLoading'
import getTVShows from '@/lib/getTVShows'
import MasonryGrid from '@/components/media-grid/MasonryGrid'

export default async function TVShowsPage() {
  const tvShows = await getTVShows()
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">TV Shows</h1>
      <Suspense fallback={<PageLoading />}>
        <MasonryGrid items={tvShows} type="tvshows" />
      </Suspense>
    </div>
  )
}