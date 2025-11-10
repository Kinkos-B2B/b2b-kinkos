import { useEffect, useRef } from 'react'

import gsap from 'gsap'
import { useInView } from 'react-intersection-observer'

export const useSolutionBottomBar = () => {
  const { ref, inView } = useInView({ threshold: 0.3, initialInView: true })
  const stickyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!inView) {
      gsap.to(stickyRef.current, {
        bottom: '20px',
        duration: 0.3,
        ease: 'ease-in-out',
      })
    } else {
      gsap.to(stickyRef.current, {
        bottom: '-100px',
        duration: 0.3,
        ease: 'ease-in-out',
      })
    }
  }, [inView])

  return { ref, stickyRef }
}
