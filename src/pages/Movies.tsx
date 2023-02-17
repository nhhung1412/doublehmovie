import React, { useState, useEffect } from 'react'
import { Imovies } from '../Type'
import { axiosClient } from '../api/axios'
import { requests } from '../api/requests'
import { Link } from 'react-router-dom'
import { MovieCard } from '../components/MovieCard'
import { TopRatedMovie } from '../components/MovieDetail/TopRatedMovie'
import { Helmet } from '../components/Helmet'
import { toast } from 'react-toastify'

import { RotatingLines } from 'react-loader-spinner'

export const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Imovies[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    const getMovies = async () => {
      try {
        const res = await axiosClient.get(requests?.requestPopular)
        setLoading(false)
        setMovies(res?.data?.results)
      } catch (error) {
        setLoading(false)
        toast.error('error')
      }
    }

    getMovies()
  }, [])

  return (
    <Helmet title="Phim lẻ">
      <div className="mx-5 md:mx-10 my-5">
        <div className="font-bold text-xl md:text-2xl mb-5">
          <span className="text-red-600 ">
            <Link to={'/'}>DoubleHMovie</Link> {'>'}
          </span>{' '}
          <span>Phim lẻ</span>
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
              {movies.map((movie) => (
                <div className="overflow-hidden">
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
