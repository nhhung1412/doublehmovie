import { useEffect, useState } from 'react'

import { MdPlaylistAddCheck } from 'react-icons/md'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'

import { motion } from 'framer-motion'

import { apiImg, requests } from '../api/requests'
import { axiosClient } from '../api/axios'

import { Imovies } from '../Type'
import { Link } from 'react-router-dom'

export const Banner: React.FC = () => {
  const [movies, setMovies] = useState<Imovies[]>([])

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axiosClient.get(requests.requestMovie)
        setMovies(res.data.results)
      } catch (error) {
        console.log(error)
      }
    }

    return () => {
      fetchBanner()
    }
  }, [])
  return (
    <div className="relative">
      <Swiper
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={0}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie?.id}>
            <img
              src={apiImg.originalImage(movie?.backdrop_path)}
              className="w-full max-h-[700px]"
            />
            <div className="absolute top-0 left-0 bg-gradient-to-r from-black w-full h-[100%]"></div>

            <div className="absolute top-[30px] md:top-[80px] lg:top-[140px] left-[20px] lg:left-[50px] w-[300px] md:w-[550px] flex flex-col gap-1 md:gap-2 lg:gap-3">
              <h1 className="truncate md:whitespace-normal text-xl  md:text-3xl lg:text-5xl font-bold mb-2 md:mb-5 text-red-600">
                {movie?.title}
              </h1>
              <div className="flex gap-5">
                <Link to={`movie/${movie?.id}`}>
                  <motion.button
                    whileTap={{ scale: '1.2' }}
                    className="flex items-center py-2 lg:py-3 lg:px-6 px-4 bg-transparent text-red-600 border-red-600 border w-max duration-200"
                  >
                    <span className="md:text-base text-xs font-semibold">
                      Chi tiết
                    </span>
                  </motion.button>
                </Link>
                <motion.button
                  whileTap={{ scale: '1.2' }}
                  className="flex items-center py-2 lg:py-3 lg:px-6 px-4 bg-red-600 text-white w-max duration-200"
                >
                  <span className="md:text-base text-xs font-semibold mr-1">
                    Xem sau
                  </span>
                  <MdPlaylistAddCheck className="text-2xl" />
                </motion.button>
              </div>
              <p className="text-[10px] md:text-xs lg:text-sm text-gray">
                Released: <span>{movie?.release_date}</span>
              </p>
              <p className="truncate lg:whitespace-normal text-xs md:text-sm lg:text-base">
                {movie?.overview}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
