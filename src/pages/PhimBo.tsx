import React, { useState, useEffect } from 'react'
import { Imovies } from '../Type'
import { axiosClient } from '../api/axios'
import { requests } from '../api/requests'
import { Link } from 'react-router-dom'
import { MovieCard } from '../components/MovieCard'
import { TopRatedMovie } from '../components/MovieDetail/TopRatedMovie'
import { Helmet } from '../components/Helmet'

export const PhimBo: React.FC = () => {
  const [movies, setMovies] = useState<Imovies[]>([])
  useEffect(() => {
    axiosClient
      .get(requests.requestTVseries)
      .then((res) => setMovies(res.data.results))
      .catch((error) => console.log(error.message))
  }, [])
  console.log(movies)

  return (
    <Helmet title="Phim bộ">
      <div className="mx-5 md:mx-10 my-5">
        <div className="font-bold text-xl md:text-2xl mb-5">
          <span className="text-red-600 ">
            <Link to={'/'}>DoubleHMovie</Link> {'>'}
          </span>{' '}
          <span>Phim bộ</span>
        </div>
        <div className="border border-red-600 my-5"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {movies.map((movie) => (
            <div className="overflow-hidden">
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
