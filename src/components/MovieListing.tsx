import { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

import { axiosClient } from '../api/axios'

import { IoMdArrowDroprightCircle } from 'react-icons/io'

import { Imovies, IMovieListing } from '../Type'
import { MovieCard } from './MovieCard'

export const MovieListing: React.FC<IMovieListing> = ({
  title,
  fetchUrl,
  category,
}) => {
  const [movies, setMovies] = useState<Imovies[]>([])

  useEffect(() => {
    axiosClient
      .get(fetchUrl)
      .then((response) => {
        setMovies(response.data.results)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }, [])

  return (
    <div className="lg:container-fluid my-10 px-6 md:px-8mx-auto">
      {/* top */}
      <div className="flex items-center justify-between my-6 md:gap-8 lg:gap-10 md:my-8 lg:my-10">
        <div className="flex justify-center  items-center gap-10">
          <span className="text-red-600  md:text-xl lg:text-2xl font-bold uppercase">
            {title}
          </span>

          <div className="md:flex gap-4 hidden">
            {category?.map((item, index) => (
              <button
                className=" py-[2px] px-1 bg-gray text-white hover:bg-red-600 transition"
                key={index}
              >
                <span className="capitalize md:text-xs lg:text-sm">{item}</span>
              </button>
            ))}
          </div>
        </div>

        <button className="py-1 px-2 md:py-2 md:px-3 bg-gray text-white hover:text-red-600 flex gap-1 transition">
          <span className="text-[10px] lg:text-xs font-bold">Xem tất cả</span>
          <IoMdArrowDroprightCircle />
        </button>
      </div>

      {/* bottom */}
      <Swiper
        spaceBetween={10}
        slidesPerGroup={1}
        navigation={true}
        modules={[Navigation]}
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie?.id} className="overflow-hidden">
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
