import { useEffect } from 'react'
import { useActive } from './useActive'

export const useScrollListener = (id) => {
  const { active, setActive } = useActive()

  useEffect(() => {
    const element = document.getElementById(id)
    const top = element.offsetTop
    const height = element.offsetHeight
    const onScrollListener = () => {
      if (
        document.documentElement.scrollTop > top &&
        document.documentElement.scrollTop < top + height
      ) {
        if (active != id) {
          setActive(id)
        }
      }
    }

    document.addEventListener('scroll', onScrollListener)
    return () => document.removeEventListener('scroll', onScrollListener)
  }, [id, active, setActive])
}
