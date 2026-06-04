import { useEffect, useState, useRef } from 'react'

type ScrollDirection = 'up' | 'down' | null

interface UseScrollDirectionOptions {
  /** Minimum scroll distance (in px) to trigger a direction change. Prevents flickering. */
  threshold?: number
}

export const useScrollDirection = (
  options: UseScrollDirectionOptions = {}
): ScrollDirection => {
  const { threshold = 10 } = options

  const [direction, setDirection] = useState<ScrollDirection>(null)
  const prevScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (Math.abs(currentScrollY - prevScrollY.current) < threshold) {
        return
      }

      if (currentScrollY > prevScrollY.current) {
        setDirection('down')
      } else if (currentScrollY < prevScrollY.current) {
        setDirection('up')
      }

      prevScrollY.current = currentScrollY
    }

    // Set initial scroll position
    prevScrollY.current = window.scrollY

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return direction
}