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

export const GetMoviesSearch: React.FC = () => {
  const [movies, setMovies] = useState<Imovies[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const { search } = useParams()

  useEffect(() => {
    setLoading(true)
    const getMoviesSearch = async () => {
      try {
        const res = await axiosClient.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`,
        )
        setLoading(false)
        setMovies(res?.data?.results)
      } catch (error) {
        setLoading(false)
        toast.error('error')
      }
    }
    getMoviesSearch()
  }, [search])

  return (
    <Helmet title={`${search}`}>
      <div className="mx-5 md:mx-10 my-5">
        <div className="font-bold text-xl md:text-2xl mb-5">
          <span className="text-red-600 ">
            <Link to={'/'}>DoubleHMovie</Link> {'>'}
          </span>
          <span> {search}</span>
        </div>
        <div className="border border-red-600 my-5"></div>

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
            {movies.length !== 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <>
                  {movies?.map((movie, index) => (
                    <div className="overflow-hidden" key={index}>
                      <MovieCard movie={movie} />
                    </div>
                  ))}
                </>
              </div>
            ) : (
              <span className="flex items-center justify-center text-3xl">{`"${search}" không tìm thấy`}</span>
            )}
          </>
        )}

        <div className="border border-red-600 mt-8"></div>
        <TopRatedMovie />
      </div>
    </Helmet>
  )
}
