import { Movie } from '@/_types/types'

export default async function getMovies(): Promise<Movie[]> {
    const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
          accept: 'application/json'
        }
      };

      try {
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=1`, options)
        if (!response.ok) {
          throw new Error('Failed to fetch popular movies')
        }
        const data = await response.json()
        return data.results
      } catch (error) {
        console.error('Error fetching popular movies:', error)
        throw error
      }
}
