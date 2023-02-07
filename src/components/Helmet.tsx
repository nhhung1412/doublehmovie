import { useEffect } from 'react'

interface Iprops {
  title: string
  children: React.ReactNode
}

export const Helmet = ({ title, children }: Iprops) => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'DoubleHMovie/' + title
  }, [title])

  return <div>{children}</div>
}
