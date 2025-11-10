import { expertApiApi } from '@/generated/apis/ExpertApi/ExpertApi.query'
import { ExpertDetailTemplate } from '@/templates/expert/detail/ExpertDetailTemplate'

export async function generateMetadata({
  params,
}: {
  params: {
    id: number
  }
}) {
  try {
    const data = await expertApiApi.getExpertDetailBySlug({
      query: {
        slug: params.id.toString(),
      },
    })

    return {
      title: data.data?.seoInfo?.seoTitle,
      description: data.data?.seoInfo?.seoDescription,
      openGraph: {
        title: data.data?.seoInfo?.ogTitle,
        description: data.data?.seoInfo?.ogDescription,
      },
      twitter: {
        title: data.data?.seoInfo?.ogTitle,
        description: data.data?.seoInfo?.ogDescription,
      },
    }
  } catch (error) {
    return {}
  }
}

export default async function ExpertDetailPage({
  params,
}: {
  params: {
    id: number
  }
}) {
  const { id } = params

  return <ExpertDetailTemplate id={id.toString()} />
}
