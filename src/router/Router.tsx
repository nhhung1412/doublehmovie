import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { MovieDetail } from '../pages/MovieDetail'
import { PageNotFound } from '../pages/PageNotFound'
import { Movies } from '../pages/Movies'
import { TVSeries } from '../pages/TVSeries'
import { MovieTheatres } from '../pages/MovieTheatres'
import { GetMoviesGenres } from '../pages/GetMoviesGenres'
import { Login } from '../pages/Login'
import { Signup } from '../pages/Signup'
import { GetMoviesSearch } from '../pages/GetMoviesSearch'
import { Trailer } from '../pages/Trailer'
import { FavoriteLists } from '../pages/FavoriteLists'
import { ProtectedRouter } from './ProtectedRouter'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/phimle" element={<Movies />} />
      <Route path="/phimbo" element={<TVSeries />} />
      <Route path="/phimchieurap" element={<MovieTheatres />} />
      <Route path="/genre/:idCate/:nameCate" element={<GetMoviesGenres />} />
      <Route path="/search/:search" element={<GetMoviesSearch />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/watch/:id" element={<Trailer />} />
      <Route path="/*" element={<ProtectedRouter />}>
        <Route path="favorite" element={<FavoriteLists />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
