export async function getCompanyDetails(id: string) {
    const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
          accept: 'application/json'
        }
      };
    
      try {
        const res = await fetch(`https://api.themoviedb.org/3/search/company/${id}?language=en-US&page=1`, { next: { revalidate: 3600 },
            ...options 
        })
      if (!res.ok) throw new Error('Failed to fetch movie company details')
      return res.json()
      } catch (error) {
        console.error('Error fetching company details:', error)
        throw error
      }
}