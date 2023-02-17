import React, { useEffect, useState } from 'react'
import { axiosClient } from '../api/axios'
import { API_KEY } from '../api/requests'
import { Helmet } from '../components/Helmet'
import { Link, useParams } from 'react-router-dom'
import { MovieCard } from '../components/MovieCard'
import { TopRatedMovie } from '../components/MovieDetail/TopRatedMovie'
import { Imovies } from '../Type'
import { toast } from 'react-toastify'
import { RotatingLines } from 'react-loader-spinner'
export const GetMoviesGenres: React.FC = () => {
  const [movies, setMovies] = useState<Imovies[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const { idCate, nameCate } = useParams<string>()

  useEffect(() => {
    setLoading(true)
    const getMoviesGenres = async () => {
      try {
        const res = await axiosClient.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${idCate}`,
        )
        setLoading(false)
        setMovies(res?.data?.results)
      } catch (error) {
        setLoading(false)
        toast.error('error')
      }
    }
    getMoviesGenres()
  }, [idCate, nameCate])

  return (
    <Helmet title={`${nameCate}`}>
      <div className="mx-5 md:mx-10 my-5">
        <div className="font-bold text-xl md:text-2xl mb-5">
          <span className="text-red-600 ">
            <Link to={'/'}>DoubleHMovie</Link> {'>'}
          </span>
          <span> {nameCate}</span>
        </div>
        <div className="border border-red-600 my-5"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {loading ? (
            <RotatingLines
              strokeColor="red"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          ) : (
            <>
              {movies.map((movie, index) => (
                <div className="overflow-hidden" key={index}>
                  <MovieCard movie={movie} />
                </div>
              ))}
            </>
          )}
        </div>
        <div className="border border-red-600 mt-8"></div>
        <TopRatedMovie />
      </div>
    </Helmet>
  )
}
