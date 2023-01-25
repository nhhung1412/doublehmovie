import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { MovieDetail } from '../components/MovieDetail'
import { PageNotFound } from '../components/PageNotFound'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:imdbID" element={<MovieDetail />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
