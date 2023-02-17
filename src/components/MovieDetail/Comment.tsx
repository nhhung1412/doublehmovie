import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { toast } from 'react-toastify'
import { RotatingLines } from 'react-loader-spinner'

import { axiosClient } from '../../api/axios'
import { API_KEY, apiImg } from '../../api/requests'
import { Rating } from '../Rating'
import { Ireviews } from '../../Type'
import { useAuth } from '../../hooks/useAuth'
import { motion } from 'framer-motion'

export const Comment: React.FC = () => {
  const [reviews, setReviews] = useState<Ireviews[]>([])
  const [comment, setComment] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const { id } = useParams()

  const { currentUser } = useAuth()

  useEffect(() => {
    setLoading(true)
    const getComments = async () => {
      try {
        const res = await axiosClient.get(
          `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
        )
        setLoading(false)
        setReviews(res?.data?.results)
      } catch (error) {
        setLoading(false)
        toast.error('error')
      }
    }
    getComments()
  }, [id])

  return (
    <div className="bg-white text-black rounded-md my-5">
      <h1 className="p-2 text-xl font-bold">Bình luận ({reviews?.length})</h1>

      {currentUser ? (
        <>
          <div className="flex gap-5 p-5 border-b border-b-textGray">
            <img
              src={currentUser.photoURL}
              alt=""
              className="w-10 h-10 object-cover rounded-full"
            />
            <form className="flex flex-col gap-2 w-full">
              <span className="font-bold">{currentUser.displayName}</span>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full h-20 md:h-24 lg:h-28 py-2 px-4 border border-textGray rounded focus-within:border-blueHover outline-none"
              ></textarea>
              <div>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="py-2 px-4 bg-black text-white rounded w-max float-right"
                  onClick={(e) => {
                    setLoading(true)
                    e.preventDefault()
                    setTimeout(() => {
                      setComment('')
                      setLoading(false)
                      toast.success('Đăng thành công!')
                    }, 500)
                  }}
                >
                  Bình luận
                </motion.button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="flex gap-5 p-5 border-b border-b-textGray">
            <img
              src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
              alt=""
              className="w-10 h-10 object-cover rounded-full"
            />
            <form className="flex flex-col gap-2 w-full">
              <span className="font-bold">User</span>
              <textarea className="w-full h-20 md:h-24 lg:h-28 py-2 px-4 border border-textGray rounded focus-within:border-blueHover outline-none"></textarea>
              <div>
                <button
                  className="py-2 px-4 bg-textGray text-white rounded w-max float-right"
                  onClick={(e) => e.preventDefault()}
                  disabled
                >
                  Đăng nhập để bình luận
                </button>
              </div>
            </form>
          </div>
        </>
      )}

      <div className="flex flex-col gap-5 p-5">
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
                  <p className="max-h-24 md:max-h-36 break-all lg:break-words overflow-auto">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}
