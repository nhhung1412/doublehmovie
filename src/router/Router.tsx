import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { MovieDetail } from '../pages/MovieDetail'
import { PageNotFound } from '../pages/PageNotFound'
import { PhimLe } from '../pages/PhimLe'
import { PhimBo } from '../pages/PhimBo'
import { PhimChieuRap } from '../pages/PhimChieuRap'
import { GetMoviesGenres } from '../pages/GetMoviesGenres'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/phimle" element={<PhimLe />} />
      <Route path="/phimbo" element={<PhimBo />} />
      <Route path="/phimchieurap" element={<PhimChieuRap />} />
      <Route path="/genre/:id/:name" element={<GetMoviesGenres />} />
    </Routes>
  )
}
