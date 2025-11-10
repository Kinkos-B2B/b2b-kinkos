import { customerReviewApiApi } from '@/generated/apis/CustomerReviewApi/CustomerReviewApi.query'
import { CustomerReviewDetailTemplate } from '@/templates/customer-review/detail/CustomerReviewDetailTemplate'

export async function generateMetadata({
  params,
}: {
  params: {
    id: string
  }
}) {
  const data = await customerReviewApiApi.getCustomerReviewDetailBySlug({
    query: {
      slug: params.id,
    },
  })

  return {
    title: data.data?.seoInfo?.seoTitle,
    description: data.data?.seoInfo?.seoDescription,
    openGraph: {
      images: [
        {
          url: data.data?.background.image?.url ?? '',
          alt: data.data?.background.image?.alt ?? '',
          width: 600,
          height: 315,
          type: 'image/png',
        },
      ],
      title: data.data?.seoInfo?.ogTitle,
      description: data.data?.seoInfo?.ogDescription,
    },
    twitter: {
      title: data.data?.seoInfo?.ogTitle,
      description: data.data?.seoInfo?.ogDescription,
    },
  }
}

export default function CustomerReviewDetailPage({
  params,
}: {
  params: {
    id: string
  }
}) {
  return <CustomerReviewDetailTemplate reviewId={params.id} />
}
