'use client'

import { Suspense } from 'react'

import { SearchResultTemplate } from '@/templates/search/SearchResultTemplate'

export default function SearchPage() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <SearchResultTemplate />
    </Suspense>
  )
}
