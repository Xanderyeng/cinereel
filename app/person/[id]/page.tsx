import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import PageLoading from "@/components/PageLoading";
import PersonDetails from '@/components/PersonDetails'
import { getPersonDetails } from '@/lib/getPersonDetails'
import BackToHomeButton from "@/components/shared/BackToHomeButton";

export default async function PersonPage({ params }: { params: { id: string } }) {
  let person

  try {
    person = await getPersonDetails(params.id)
  } catch (error) {
    notFound()
  }

  return (
    <section className="container mx-auto px-4 py-12 ">
      <div className="flex flex-row items-center justify-end py-12 ">
      {/* <h1 className="text-3xl font-bold text-center ">Top movies of the week</h1> */}
      <BackToHomeButton />
      </div>
    <Suspense fallback={<PageLoading />}>
      <PersonDetails person={person} />
    </Suspense>
    </section>
  )
}