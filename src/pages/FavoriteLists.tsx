import { Helmet } from '../components/Helmet'
import { Link } from 'react-router-dom'

import { MovieCard } from '../components/MovieCard'
import { TopRatedMovie } from '../components/MovieDetail/TopRatedMovie'
import { useAppSelector } from '../hooks/useAppSelector'

import { removeFavoriteMovie } from '../features/slices/FavoriteMoviesSlice'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { motion } from 'framer-motion'

export const FavoriteLists = () => {
  const movies = useAppSelector((state) => state.favoriteMovies.favoriteMovies)
  const dispatch = useAppDispatch()
  return (
    <Helmet title="Danh sách yêu thích">
      <div className="mx-5 md:mx-10 my-5">
        <div className="font-bold text-xl md:text-2xl mb-5">
          <span className="text-red-600 ">
            <Link to={'/'}>DoubleHMovie</Link> {'>'}
          </span>{' '}
          <span>Danh sách yêu thích</span>
        </div>
        <div className="border border-red-600 my-5"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {movies.map((movie) => (
            <div className="overflow-hidden relative">
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="absolute bg-red-600 bottom-12 right-2 px-1 py-[2px] rounded-xl z-50"
                onClick={() => dispatch(removeFavoriteMovie(movie))}
              >
                Bỏ thích
              </motion.button>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>

        <div className="border border-red-600 mt-8"></div>
        <TopRatedMovie />
      </div>
    </Helmet>
  )
}
