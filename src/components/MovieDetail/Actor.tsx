import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

import { axiosClient } from '../../api/axios'

import { API_KEY, apiImg } from '../../api/requests'

import { IActor } from '../../Type'

export const Actor: React.FC = () => {
  const [actor, setActor] = useState<IActor[]>([])
  const { id } = useParams()

  useEffect(() => {
    axiosClient
      .get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
      .then((res) => setActor(res.data.cast))
      .catch((error) => console.log(error.message))
  }, [id])

  return (
    <div>
      <h1 className="p-2 text-xl font-bold text-red-600 uppercase">
        Diễn viên
      </h1>
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          0: {
            width: 320,
            slidesPerView: 2,
          },
          480: {
            width: 480,
            slidesPerView: 2,
          },
          768: {
            width: 768,
            slidesPerView: 4,
          },
          1024: {
            width: 1024,
            slidesPerView: 5,
          },
          1280: {
            width: 1280,
            slidesPerView: 5,
          },
        }}
      >
        {actor.map((item) => (
          <SwiperSlide key={item?.id}>
            <img
              src={apiImg.w500Image(item?.profile_path)}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null // prevents looping
                currentTarget.src =
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'
              }}
              alt={item?.name}
              className="w-[200px] rounded-2xl object-cover"
            />
            <p className="font-bold">{item?.name}</p>
            <p className="text text-textGray">({item?.character})</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
