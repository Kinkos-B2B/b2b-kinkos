import { ProblemSolveDetailTemplate } from '@/templates/problem-solve/detail/ProblemSolveDetailTemplate'

export default function ProblemSolveDetailPage({
  params,
}: {
  params: {
    id: string
  }
}) {
  return <ProblemSolveDetailTemplate id={params.id} />
}
