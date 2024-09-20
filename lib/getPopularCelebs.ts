export async function getPopularCelebs() {
    const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
          accept: 'application/json'
        }
      };
    
      try {
        const res = await fetch(`https://api.themoviedb.org/3/person/popular`, { next: { revalidate: 3600 },
            ...options 
        })
      if (!res.ok) throw new Error('Failed to fetch popular celebrities')
      return res.json()
      } catch (error) {
        console.error('Error fetching popular celebrities:', error)
        throw error
      }
}