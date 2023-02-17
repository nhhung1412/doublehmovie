import React, { useEffect, useState } from 'react'
import { requests } from '../../api/requests'
import { Imovies } from '../../Type'
import { axiosClient } from '../../api/axios'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

import { toast } from 'react-toastify'
import { RotatingLines } from 'react-loader-spinner'

import { MovieCard } from '../MovieCard'

export const TopRatedMovie: React.FC = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<Imovies[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    const getTopRatedMovies = async () => {
      try {
        const res = await axiosClient.get(requests.requestTopRated)
        setLoading(false)
        setTopRatedMovies(res?.data?.results)
      } catch (error) {
        setLoading(false)
        toast.error('error')
      }
    }
    getTopRatedMovies()
  }, [])

  return (
    <>
      <h1 className="p-2 text-xl font-bold text-red-600 uppercase">
        Thịnh hành
      </h1>
      <Swiper
        grabCursor={true}
        freeMode={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          0: {
            width: 320,
            slidesPerView: 1,
          },
          480: {
            width: 480,
            slidesPerView: 2,
          },
          768: {
            width: 768,
            slidesPerView: 3,
          },
          1024: {
            width: 1024,
            slidesPerView: 4,
          },
          1280: {
            width: 1280,
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
            {topRatedMovies?.map((item) => (
              <SwiperSlide key={item?.id} className="overflow-hidden">
                <MovieCard movie={item} />
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </>
  )
}
