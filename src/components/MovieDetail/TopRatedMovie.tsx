import React, { useEffect, useState } from 'react'
import { requests } from '../../api/requests'
import { Imovies } from '../../Type'
import { axiosClient } from '../../api/axios'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

import { MovieCard } from '../MovieCard'

export const TopRatedMovie: React.FC = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<Imovies[]>([])

  useEffect(() => {
    axiosClient
      .get(requests.requestTopRated)
      .then((res) => setTopRatedMovies(res.data.results))
      .catch((error) => console.log(error.message))
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
        {topRatedMovies?.map((item) => (
          <SwiperSlide key={item?.id} className="overflow-hidden">
            <MovieCard movie={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="border my-5 border-gray"></div>
    </>
  )
}
