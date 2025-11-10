import { helpArticleApiApi } from '@/generated/apis/HelpArticleApi/HelpArticleApi.query'
import { ProblemSolveDetailTemplate } from '@/templates/problem-solve/detail/ProblemSolveDetailTemplate'

export async function generateMetadata({
  params,
}: {
  params: {
    id: string
  }
}) {
  const data = await helpArticleApiApi.getHelpArticleDetailBySlug({
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
          url: data.data?.intro.image?.url ?? '',
          alt: data.data?.intro.image?.alt ?? '',
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
export default function ProblemSolveDetailPage({
  params,
}: {
  params: {
    id: string
  }
}) {
  return <ProblemSolveDetailTemplate id={params.id} />
}
