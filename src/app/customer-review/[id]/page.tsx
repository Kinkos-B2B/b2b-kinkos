import { CustomerReviewDetailTemplate } from '@/templates/customer-review/detail/CustomerReviewDetailTemplate'

export default function CustomerReviewDetailPage({
  params,
}: {
  params: {
    id: number
  }
}) {
  const { id } = params
  return <CustomerReviewDetailTemplate reviewId={params.id} />
}
