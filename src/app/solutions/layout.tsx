import { PageLayout } from '@/components/@layout/page-layout/page-layout'
import { SolutionHeaderNavigation } from '@/templates/solutions/common/SolutionHeaderNavigation'

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
