export async function getTVShowDetails(id: string) {
    const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
          accept: 'application/json'
        }
      };
    
      try {
        const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US&append_to_response=credits`, { next: { revalidate: 3600 },
            ...options 
        })
      if (!res.ok) throw new Error('Failed to fetch movie details')
      return res.json()
      } catch (error) {
        console.error('Error fetching popular movies:', error)
        throw error
      }
}