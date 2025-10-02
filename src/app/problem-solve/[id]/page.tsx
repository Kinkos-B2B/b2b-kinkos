import { ProblemSolveDetailTemplate } from '@/templates/problem-solve/detail/ProblemSolveDetailTemplate'

export default function ProblemSolveDetailPage({
  params,
}: {
  params: {
    id: number
  }
}) {
  const { id } = params

  return <ProblemSolveDetailTemplate id={id.toString()} />
}
