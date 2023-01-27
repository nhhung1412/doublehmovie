import { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

import { axiosClient } from '../api/axios'

import { IoMdArrowDroprightCircle } from 'react-icons/io'

interface IMovieListing {
  title: string
  fetchUrl: string
  category?: string[]
}

export const MovieListing = ({ title, fetchUrl, category }: IMovieListing) => {
  const [movies, setMovies] = useState<string[]>([])

  useEffect(() => {
    axiosClient.get(fetchUrl).then((response) => {
      setMovies(response.data.results)
    })
  }, [])
  console.log(movies)

  return (
    <div className="container-fluid my-10">
      {/* top */}
      <div className="flex gap-10 my-10">
        <span className="text-red-600 text-2xl font-bold uppercase w-60">
          {title}
        </span>
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-4 ">
            {category?.map((item, index) => (
              <button
                className="py-1 px-2 bg-gray text-white hover:bg-red-600 transition"
                key={index}
              >
                <span className="capitalize text-sm">{item}</span>
              </button>
            ))}
          </div>
          <button className="py-2 px-3 bg-gray text-white hover:text-red-600 flex gap-1 transition">
            <span className="text-xs font-bold">Xem tất cả</span>
            <IoMdArrowDroprightCircle />
          </button>
        </div>
      </div>

      {/* bottom */}
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie?.id} className="w-[15%]">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
              alt={movie?.title}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
