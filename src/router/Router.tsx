import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { MovieDetail } from '../pages/MovieDetail'
import { PageNotFound } from '../pages/PageNotFound'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:imdbID" element={<MovieDetail />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
