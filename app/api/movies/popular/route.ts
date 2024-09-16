import { NextResponse } from 'next/server'

export async function GET() {
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
      accept: 'application/json'
    }
  };

  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching popular movies:', error)
    return NextResponse.json({ error: 'Failed to fetch popular movies' }, { status: 500 })
  }
}