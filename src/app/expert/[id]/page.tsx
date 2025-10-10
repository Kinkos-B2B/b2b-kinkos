import { ExpertDetailTemplate } from '@/templates/expert/detail/ExpertDetailTemplate'

export default function ExpertDetailPage({
  params,
}: {
  params: {
    id: number
  }
}) {
  const { id } = params

  return <ExpertDetailTemplate id={id.toString()} />
}
