import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { MovieDetail } from '../pages/MovieDetail'
import { PageNotFound } from '../pages/PageNotFound'
import { PhimLe } from '../pages/PhimLe'
import { PhimBo } from '../pages/PhimBo'
import { PhimChieuRap } from '../pages/PhimChieuRap'
import { GetMoviesGenres } from '../pages/GetMoviesGenres'
import { Login } from '../pages/Login'
import { Signup } from '../pages/Signup'
import { GetMoviesSearch } from '../pages/GetMoviesSearch'
import { Trailer } from '../pages/Trailer'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/phimle" element={<PhimLe />} />
      <Route path="/phimbo" element={<PhimBo />} />
      <Route path="/phimchieurap" element={<PhimChieuRap />} />
      <Route path="/genre/:idCate/:nameCate" element={<GetMoviesGenres />} />
      <Route path="/search/:search" element={<GetMoviesSearch />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/watch/:id" element={<Trailer />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
