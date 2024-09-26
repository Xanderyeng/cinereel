import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import PersonDetails from '@/components/PersonDetails'
import PageLoading from '@/components/PageLoading'
import { getPersonDetails } from '@/lib/getPersonDetails'

export default async function PersonPage({ params }: { params: { id: string } }) {
  let person

  try {
    person = await getPersonDetails(params.id)
  } catch (error) {
    notFound()
  }

  return (
    <Suspense fallback={<PageLoading />}>
      <PersonDetails person={person} />
    </Suspense>
  )
}