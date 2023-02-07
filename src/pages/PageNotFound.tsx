import React from 'react'
import { Helmet } from '../components/Helmet'

export const PageNotFound: React.FC = () => {
  return (
    <Helmet title="Page Not Founded!">
      <img
        src="https://bizflyportal.mediacdn.vn/thumb_wm/1000,100/bizflyportal/techblog/png15910726485415.jpg"
        alt="notfound"
        className="w-full h-full"
      />
    </Helmet>
  )
}
