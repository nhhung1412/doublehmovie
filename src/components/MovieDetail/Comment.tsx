import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { axiosClient } from '../../api/axios'
import { API_KEY, apiImg } from '../../api/requests'
import { Rating } from '../Rating'

interface Ireviews {
  length: number
  author: string
  author_details: IauthorDetail
  content: string
  created_at: string
}

interface IauthorDetail {
  name: string
  username: string
  avatar_path: string
  rating: number
}

export const Comment: React.FC = () => {
  const [reviews, setReviews] = useState<Ireviews[]>([])
  const { id } = useParams()

  useEffect(() => {
    axiosClient
      .get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => setReviews(res.data.results))
      .catch((error) => console.log(error.message))
  }, [id])

  console.log(reviews)
  return (
    <div className="bg-white text-black rounded-md my-5">
      <h1 className="p-2 text-xl font-bold">Bình luận ({reviews?.length})</h1>
      <div className="flex flex-col gap-5 p-5">
        {reviews?.map((item) => (
          <div className="flex gap-5">
            <img
              src={apiImg.w500Image(item?.author_details?.avatar_path)}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null // prevents looping
                currentTarget.src =
                  'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg'
              }}
              className="w-10 h-10 object-cover rounded-full"
              alt={item?.author}
            />
            <div className="flex flex-col gap-1 md:gap-2">
              <span className="font-bold">
                {item?.author_details?.username}
              </span>
              <div className="flex gap-3">
                <span className="text-yellow-500">
                  <Rating vote={item?.author_details?.rating} />
                </span>
                <span className="text-sm text-textGray italic">
                  {item.created_at.slice(0, 10)}
                </span>
              </div>
              <p className="max-h-24 md:max-h-36 break-all overflow-auto">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
