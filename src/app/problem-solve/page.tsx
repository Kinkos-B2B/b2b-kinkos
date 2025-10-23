import { GetAllHelpArticleParamsTypeEnumType } from '@/helper/options'
import { ProblemSolveTemplate } from '@/templates/problem-solve/ProblemSolveTemplate'

export default function ProblemSolvePage({
  searchParams,
}: {
  searchParams: { tab?: string }
}) {
  const activeTab = searchParams.tab

  return (
    <ProblemSolveTemplate
      activeTab={activeTab as GetAllHelpArticleParamsTypeEnumType}
    />
  )
}
