import { useEffect, useState } from 'react'

import { motion } from 'framer-motion'

import { requests } from '../api/requests'
import { axiosClient } from '../api/axios'

interface Imovies {
  backdrop_path: string
  title: string
  release_date: string
  overview: string
}

export const Banner = () => {
  const [movies, setMovies] = useState<Imovies[]>([])

  const movie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(() => {
    axiosClient.get(requests.requestMovie).then((response) => {
      setMovies(response.data.results)
    })
  }, [])
  return (
    <div className="relative pt-[45%]">
      <img
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        className="absolute top-0 left-0  w-full h-[100%]"
      />
      <div className="absolute top-0 left-0 bg-gradient-to-r from-black w-full h-[100%]"></div>

      <div className="absolute top-[30px] md:top-[80px] lg:top-[140px] left-[20px] lg:left-[50px] w-[300px] md:w-[550px] flex flex-col gap-1 md:gap-2 lg:gap-3">
        <h1 className="truncate md:whitespace-normal text-xl  md:text-3xl lg:text-5xl font-bold mb-2 md:mb-5 text-red-600">
          {movie?.title}
        </h1>
        <div className="flex gap-5">
          <motion.button
            whileTap={{ scale: '1.2' }}
            className="flex items-center py-2 lg:py-3 lg:px-6 px-4 bg-transparent text-red-600 border-red-600 border w-max duration-200"
          >
            <span className="md:text-base text-xs font-semibold">Play</span>
          </motion.button>
          <motion.button
            whileTap={{ scale: '1.2' }}
            className="flex items-center py-2 lg:py-3 lg:px-6 px-4 bg-red-600 text-white w-max duration-200"
          >
            <span className="md:text-base text-xs font-semibold">
              Watch later
            </span>
          </motion.button>
        </div>
        <p className="text-[10px] md:text-xs lg:text-sm text-gray">
          Released: <span>{movie?.release_date}</span>
        </p>
        <p className="truncate lg:whitespace-normal text-xs md:text-sm lg:text-base">
          {movie?.overview}
        </p>
      </div>
    </div>
  )
}
