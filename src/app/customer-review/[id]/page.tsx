import { CustomerReviewDetailTemplate } from '@/templates/customer-review/detail/CustomerReviewDetailTemplate'

export default function CustomerReviewDetailPage({
  params,
}: {
  params: {
    id: string
  }
}) {
  return <CustomerReviewDetailTemplate reviewId={params.id} />
}
