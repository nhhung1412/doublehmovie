import { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { RotatingLines } from 'react-loader-spinner'
import { axiosClient } from '../api/axios'

import { IoMdArrowDroprightCircle } from 'react-icons/io'

import { Imovies, IMovieListing } from '../Type'
import { MovieCard } from './MovieCard'
import { Link } from 'react-router-dom'

import { toast } from 'react-toastify'
import { motion } from 'framer-motion'

export const MovieListing: React.FC<IMovieListing> = ({
  title,
  fetchUrl,
  category,
  linkUrl,
}) => {
  const [movies, setMovies] = useState<Imovies[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    const getMoviesList = async () => {
      try {
        const res = await axiosClient.get(fetchUrl)
        setLoading(false)
        setMovies(res?.data?.results)
      } catch (error) {
        setLoading(false)
        toast.error('error')
      }
    }
    getMoviesList()
  }, [])

  return (
    <div>
      {/* top */}
      <div className="flex items-center justify-between my-6 md:gap-8 lg:gap-10 md:my-8 lg:my-10">
        <div className="flex justify-center  items-center gap-10">
          <span className="text-red-600  md:text-xl lg:text-2xl font-bold uppercase">
            {title}
          </span>

          <div className="md:flex gap-4 hidden">
            {category?.map((item, index) => (
              <motion.button
                whileTap={{ scale: 1.3 }}
                className=" py-[2px] px-1 bg-gray text-white hover:bg-red-600 transition"
                key={index}
              >
                <span className="capitalize md:text-xs lg:text-sm">{item}</span>
              </motion.button>
            ))}
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 1.3 }}
          className="py-1 px-2 md:py-2 md:px-3 bg-gray text-white hover:text-red-600 flex gap-1 transition"
        >
          <Link to={linkUrl} className="text-[10px] lg:text-xs font-bold">
            Xem tất cả
          </Link>
          <IoMdArrowDroprightCircle />
        </motion.button>
      </div>

      {/* bottom */}
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          320: {
            width: 320,
            slidesPerView: 1,
          },
          600: {
            width: 600,
            slidesPerView: 2,
          },
          991: {
            width: 991,
            slidesPerView: 3,
          },
          1240: {
            width: 1240,
            slidesPerView: 3,
          },
          1600: {
            width: 1600,
            slidesPerView: 4,
          },
        }}
      >
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
              <SwiperSlide key={movie?.id} className="overflow-hidden">
                <MovieCard movie={movie} />
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </div>
  )
}
