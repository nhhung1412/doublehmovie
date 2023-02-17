import { useEffect, useState } from 'react'

import { useParams, Link } from 'react-router-dom'

import { motion } from 'framer-motion'

import { AiFillPlayCircle } from 'react-icons/ai'
import { TbHeartPlus } from 'react-icons/tb'

import { axiosClient } from '../api/axios'
import { API_KEY, apiImg } from '../api/requests'

import { Rating } from '../components/Rating'
import { Helmet } from '../components/Helmet'
import { SimilarMovies } from '../components/MovieDetail/SimilarMovies'
import { Actor } from '../components/MovieDetail/Actor'
import { IMovieDetail } from '../Type'
import { TopRatedMovie } from '../components/MovieDetail/TopRatedMovie'
import { toast } from 'react-toastify'
import { RotatingLines } from 'react-loader-spinner'

import { useAppDispatch } from '../hooks/useAppDispatch'

import { addFavoriteMovie } from '../features/slices/FavoriteMoviesSlice'
import { useAuth } from '../hooks/useAuth'

export const MovieDetail: React.FC = () => {
  const [movieDetail, setMovieDetail] = useState<IMovieDetail>(Object)
  const [loading, setLoading] = useState<boolean>(false)

  const dispatch = useAppDispatch()
  const { currentUser } = useAuth()

  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    const getMovieDetail = async () => {
      try {
        const res = await axiosClient.get(
          `/movie/${id}?api_key=${API_KEY}&language=en-US`,
        )
        setLoading(false)
        setMovieDetail(res?.data)
      } catch (error) {
        setLoading(false)
        toast.error('error')
      }
    }
    setTimeout(() => {
      getMovieDetail()
    }, 500)
  }, [id])

  const {
    title,
    overview,
    poster_path,
    backdrop_path,
    release_date,
    vote_average,
    status,
    genres,
  } = movieDetail

  const getFavorite = () => {
    if (!currentUser) {
      toast.info('Bạn cần đăng nhập!')
    } else {
      dispatch(addFavoriteMovie(movieDetail))
    }
  }

  return (
    <Helmet title={title}>
      {/* Detail */}
      {loading ? (
        <RotatingLines
          strokeColor="red"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      ) : (
        <div className="relative">
          <img
            className="w-full max-h-[690px] object-cover"
            src={apiImg.originalImage(backdrop_path)}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null // prevents looping
              currentTarget.src =
                'https://img.freepik.com/free-vector/realsitic-film-strip-black-background_1017-33462.jpg'
            }}
            alt=""
          />
          <div className="md:absolute md:top-0 md:left-0 md:bg-gradient-to-r md:w-full md:h-full md:from-black "></div>

          <div
            className="flex 
          m-4
          md:m-0 md:gap-3 lg:gap-5 
        md:absolute md:top-0 md:bottom-0 md:w-full
        "
          >
            <img
              className="hidden md:block rounded-3xl m-5 object-cover"
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null // prevents looping
                currentTarget.src =
                  'data:image/jpeg;base64,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'
              }}
              alt=""
            />
            <div className="flex flex-col md:mt-4 lg:mt-10 gap-2 lg:gap-5">
              <div className="flex gap-5 justify-center md:order-1 md:justify-start">
                <Link to={`/watch/${id}`}>
                  <motion.button
                    whileTap={{ scale: 1.2 }}
                    className="flex items-center py-2 lg:py-3 lg:px-6 px-4 bg-transparent text-red-600 border-red-600 border w-max"
                  >
                    <span className="text-base font-semibold mr-1">Xem</span>
                    <AiFillPlayCircle className="text-2xl" />
                  </motion.button>
                </Link>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="flex items-center py-2 lg:py-3 lg:px-6 px-4 bg-red-600 text-white w-max"
                  onClick={getFavorite}
                >
                  <span className="text-base font-semibold mr-1">
                    Yêu thích
                  </span>
                  <TbHeartPlus className="text-2xl" />
                </motion.button>
              </div>
              <h1 className="text-3xl lg:text-5xl text-red-600 font-semibold">
                {title}
              </h1>
              <p className="text-base lg:text-lg font-semibold">
                {status == 'Released' ? '(Đã phát hành)' : '(Chưa phát hành)'}
              </p>
              <div>
                {genres?.map((item) => (
                  <button
                    className="py-2 px-4 bg-transparent rounded-2xl border-2 border-red-600 text-white 
                  mr-3 lg:mr-5 
                  hover:bg-red-600 transition"
                    key={item.id}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <div>
                <span className="text-textGray text-base">Giới thiệu</span>
                <p className=" md:h-12 md:overflow-auto lg:h-auto">
                  {overview}
                </p>
              </div>
              <div>
                <span className="text-textGray text-base">Xuất bản</span>
                <p>{release_date}</p>
              </div>
              <div className="text-yellow-400 text-2xl">
                <span className="text-textGray text-base">Votes</span>
                <Rating vote={vote_average} />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mx-5 md:mx-20 lg:mx-40 my-5">
        {/* Actor */}
        <Actor />
        <div className="border my-5 border-gray"></div>
        {/* Similar */}
        <SimilarMovies />
        <div className="border my-5 border-gray"></div>
        {/* Top Rated */}
        <TopRatedMovie />
      </div>
    </Helmet>
  )
}
