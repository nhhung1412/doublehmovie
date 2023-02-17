import { useEffect, useState } from 'react'

import { TbHeartPlus } from 'react-icons/tb'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'

import { motion } from 'framer-motion'

import { apiImg, requests } from '../api/requests'
import { axiosClient } from '../api/axios'
import { RotatingLines } from 'react-loader-spinner'

import { Imovies } from '../Type'
import { Link } from 'react-router-dom'

import { toast } from 'react-toastify'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { addFavoriteMovie } from '../features/slices/FavoriteMoviesSlice'
import { useAuth } from '../hooks/useAuth'

export const Banner: React.FC = () => {
  const [movies, setMovies] = useState<Imovies[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const { currentUser } = useAuth()

  useEffect(() => {
    setLoading(true)
    const getBanner = async () => {
      try {
        const res = await axiosClient.get(requests?.requestMovie)
        setLoading(false)
        setMovies(res?.data?.results)
      } catch (error) {
        setLoading(false)
        toast.error('error')
      }
    }
    getBanner()
  }, [])

  const handleAddFavoriteMovie = (movie: Imovies) => {
    if (!currentUser) {
      toast.info('Bạn cần đăng nhập!')
    } else {
      dispatch(addFavoriteMovie(movie))
    }
  }

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
                        whileTap={{ scale: 1.2 }}
                        className="flex items-center py-2 lg:py-3 lg:px-6 px-4 bg-transparent text-red-600 border-red-600 border w-max"
                      >
                        <span className="md:text-base text-xs font-semibold">
                          Chi tiết
                        </span>
                      </motion.button>
                    </Link>
                    <motion.button
                      whileTap={{ scale: 1.2 }}
                      className="flex items-center py-2 lg:py-3 lg:px-6 px-4 bg-red-600 text-white w-max"
                      onClick={() => handleAddFavoriteMovie(movie)}
                    >
                      <span className="md:text-base text-xs font-semibold mr-1">
                        Yêu thích
                      </span>
                      <TbHeartPlus className="text-2xl" />
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
          </>
        )}
      </Swiper>
    </div>
  )
}
