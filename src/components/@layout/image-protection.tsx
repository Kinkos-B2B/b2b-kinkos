'use client'

import { useEffect } from 'react'

/**
 * 이미지 드래그 및 우클릭 방지를 위한 컴포넌트
 */
export function ImageProtection() {
  useEffect(() => {
    // 이미지에 대한 드래그 방지 이벤트 핸들러
    const handleDragStart = (e: DragEvent) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault()
        return false
      }
    }

    // 이미지에 대한 우클릭 방지 이벤트 핸들러
    const handleContextMenu = (e: MouseEvent) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault()
        return false
      }
    }

    // 이미지 선택 방지
    const handleSelectStart = (e: Event) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault()
        return false
      }
    }

    // 전역 이벤트 리스너 등록
    document.addEventListener('dragstart', handleDragStart)
    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('selectstart', handleSelectStart)

    // 모든 이미지 요소에 직접 이벤트 리스너 추가
    const images = document.querySelectorAll('img')
    images.forEach((img) => {
      img.addEventListener('dragstart', handleDragStart)
      img.addEventListener('contextmenu', handleContextMenu)
      img.addEventListener('selectstart', handleSelectStart)
    })

    // 동적으로 추가되는 이미지도 처리하기 위한 MutationObserver
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLImageElement) {
            node.addEventListener('dragstart', handleDragStart)
            node.addEventListener('contextmenu', handleContextMenu)
            node.addEventListener('selectstart', handleSelectStart)
          }
          // 자식 노드에서 이미지 찾기
          if (node instanceof HTMLElement) {
            const childImages = node.querySelectorAll('img')
            childImages.forEach((img) => {
              img.addEventListener('dragstart', handleDragStart)
              img.addEventListener('contextmenu', handleContextMenu)
              img.addEventListener('selectstart', handleSelectStart)
            })
          }
        })
      })
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    // 클린업
    return () => {
      document.removeEventListener('dragstart', handleDragStart)
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('selectstart', handleSelectStart)

      images.forEach((img) => {
        img.removeEventListener('dragstart', handleDragStart)
        img.removeEventListener('contextmenu', handleContextMenu)
        img.removeEventListener('selectstart', handleSelectStart)
      })

      observer.disconnect()
    }
  }, [])

  return null
}
