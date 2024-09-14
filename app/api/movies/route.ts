import { NextApiRequest, NextApiResponse } from 'next'
import { fetchMovies } from '@/_lib/api'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1', 10)
  const perPage = parseInt(searchParams.get('perPage') || '3', 10)

  const movies = await fetchMovies()
  return NextApiResponse.json(movies)
}