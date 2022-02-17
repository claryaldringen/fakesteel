import { useEffect } from 'react'

export const useScrollListener = (id, active, setActive) => {
  useEffect(() => {
    const element = document.getElementById(id)
    const top = element.offsetTop
    const height = element.offsetHeight
    const onScrollListener = () => {
      if (
        document.documentElement.scrollTop > top - 100 &&
        document.documentElement.scrollTop < top - 100 + height
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
