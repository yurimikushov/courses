import { useEffect, useState } from 'react'
import { isBrowser } from '../utils'

const useScrollY = (): number => {
  const [scrollY, setScrollY] = useState<number>(0)

  useEffect(() => {
    const onScroll = () => {
      setScrollY(isBrowser() ? window.scrollY : 0)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scrollY
}

export { useScrollY }
