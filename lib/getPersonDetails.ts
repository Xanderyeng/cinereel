export async function getPersonDetails(id: string) {
    const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
          accept: 'application/json'
        }
      };
    
      try {
        const res = await fetch(`https://api.themoviedb.org/3/person/${id}?&append_to_response=movie_credits`, { next: { revalidate: 3600 },
            ...options 
        })
      if (!res.ok) throw new Error('Failed to fetch Actor/actress details')
      return res.json()
      } catch (error) {
        console.error('Error fetching persona details:', error)
        throw error
      }
}