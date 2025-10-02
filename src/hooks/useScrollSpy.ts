// useScrollSpy.ts
import { useEffect, useState } from 'react'

type Opts = {
  sectionIds: string[]
  headerOffset?: number // 고정 헤더 높이(px)
  minVisibleRatio?: number // 섹션이 활성화되기 위한 최소 가시율
}

export function useScrollSpy({
  sectionIds,
  headerOffset = 80,
  minVisibleRatio = 0.5,
}: Opts) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]
    if (sections.length === 0) return

    // 헤더 보정: 관찰 영역을 위로 당겨서 헤더 아래로 들어오면 바로 감지
    const observer = new IntersectionObserver(
      (entries) => {
        // 화면에 보이는 섹션 중 가시율이 가장 큰 섹션을 active로
        const visible = entries
          .filter((e) => e.isIntersecting && e.intersectionRatio > 0)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length) {
          const best = visible[0]
          if (best.intersectionRatio >= minVisibleRatio) {
            setActiveId(best.target.id)
            return
          }
        }

        // 가시율이 기준에 못 미치면, 뷰포트 상단에서 가장 가까운 섹션 선택(스크롤 경계 상황 보완)
        const top = sections
          .map((el) => {
            const rect = el.getBoundingClientRect()
            return { id: el.id, dist: Math.abs(rect.top - headerOffset) }
          })
          .sort((a, b) => a.dist - b.dist)[0]
        if (top) setActiveId(top.id)
      },
      {
        // 상단 헤더 높이만큼 위로 끌어올림
        rootMargin: `-${headerOffset}px 0px 0px 0px`,
        threshold: Array.from({ length: 11 }, (_, i) => i / 10), // 0.0~1.0
      },
    )

    sections.forEach((el) => observer.observe(el))
    // 이미지 로딩 등 레이아웃 시프트 후 재계산 보완
    const onResize = () => observer.takeRecords()
    window.addEventListener('resize', onResize)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', onResize)
    }
  }, [sectionIds, headerOffset, minVisibleRatio])

  return activeId
}
