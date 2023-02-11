import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { API_KEY } from '../../api/requests'
import { axiosClient } from '../../api/axios'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

import { MovieCard } from '../MovieCard'
import { Imovies } from '../../Type'

export const SimilarMovies: React.FC = () => {
  const [similarMovies, setSimilarMovies] = useState<Imovies[]>([])
  const { id } = useParams()

  useEffect(() => {
    axiosClient
      .get(`/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=4`)
      .then((res) => setSimilarMovies(res.data.results))
      .catch((error) => console.log(error.message))
  }, [id])

  return (
    <>
      <h1 className="p-2 text-xl font-bold text-red-600 uppercase">
        Phim liên quan
      </h1>
      <Swiper
        grabCursor={true}
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
        {similarMovies?.map((item) => (
          <SwiperSlide key={item?.id} className="overflow-hidden">
            <MovieCard movie={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
