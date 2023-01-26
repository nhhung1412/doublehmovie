import { useEffect } from 'react'

interface Iprops {
  title: string
  children: JSX.Element
}

export const Helmet = ({ title, children }: Iprops) => {
  useEffect(() => {
    document.title = 'DoubleHMovie - ' + title
  }, [])

  return <div>{children}</div>
}
