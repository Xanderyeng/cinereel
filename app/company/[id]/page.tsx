import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import CompanyDetails from '@/components/CompanyDetails'
import PageLoading from '@/components/PageLoading'
import { getCompanyDetails } from '@/lib/getCompanyDetails'

export default async function CompanyPage({ params }: { params: { id: string } }) {
  let company

  try {
    company = await getCompanyDetails(params.id)
  } catch (error) {
    notFound()
  }

  return (
    <Suspense fallback={<PageLoading />}>
      <CompanyDetails company={company} />
    </Suspense>
  )
}