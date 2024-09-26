const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const options = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
    accept: 'application/json'
  }
};
export async function searchTMDB(query: string) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1&query=${query}`, { next: { revalidate: 3600 },
        ...options 
    })
  if (!res.ok) throw new Error('Failed to fetch movie details')
  return res.json()
  } catch (error) {
    console.error('Error fetching popular movies:', error)
    throw error
  }

}

export async function getDetails(mediaType: 'movie' | 'tv', id: string) {
  const response = await fetch(`https://api.themoviedb.org/3/${mediaType}/${id}?language=en-US&append_to_response=credits`, { next: { revalidate: 3600 },
            ...options 
        })
  if (!response.ok) {
    throw new Error('Failed to fetch details');
  }
  return response.json();
}