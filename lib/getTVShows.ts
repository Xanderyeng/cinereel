import { TVShow } from '@/_types/types'

export default async function getTVShows(): Promise<TVShow[]> {
    const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
          accept: 'application/json'
        }
      };

      try {
        const response = await fetch(`https://api.themoviedb.org/3/trending/tv/week?language=en-US&page=1`, options)
        if (!response.ok) {
          throw new Error('Failed to fetch popular tv shows')
        }
        const data = await response.json()
        return data.results
      } catch (error) {
        console.error('Error fetching popular tv shows:', error)
        throw error
      }
}
