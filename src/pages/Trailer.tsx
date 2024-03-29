import { useEffect, useState } from 'react'
import { axiosClient } from '../api/axios'
import { useParams } from 'react-router-dom'
import { API_KEY } from '../api/requests'
import { Comment } from '../components/MovieDetail/Comment'
import { SimilarMovies } from '../components/MovieDetail/SimilarMovies'
import { TopRatedMovie } from '../components/MovieDetail/TopRatedMovie'
import { toast } from 'react-toastify'
import { RotatingLines } from 'react-loader-spinner'

interface ITrailer {
  name: string
  key: string
}

export const Trailer: React.FC = () => {
  const [video, setVideo] = useState<ITrailer>(Object)
  const [loading, setLoading] = useState<boolean>(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    const getTrailer = async () => {
      try {
        const res = await axiosClient.get(
          `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`,
        )
        const trailer = res.data.results.filter(
          (item: { type: string }) => item.type === 'Trailer',
        )
        setLoading(false)
        setVideo(trailer[0])
      } catch (error) {
        setLoading(false)
        toast.error('error')
      }
    }
    getTrailer()
  }, [id])

  return (
    <div className="mx-5 my-5 md:mx-20 lg:mx-40">
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
          <p className="text-red-600 font-bold text-xl md:text-2xl lg:text-3xl mb-5">
            {video?.name}
          </p>
          <iframe
            src={`https://www.youtube.com/embed/${video?.key}`}
            title={video?.name}
            className="w-full h-[300px] md:h-[400px] lg:h-[550px]"
          ></iframe>
          <Comment />
          <div className="border my-5 border-gray"></div>
          <SimilarMovies />
          <div className="border my-5 border-gray"></div>
          <TopRatedMovie />
        </>
      )}
    </div>
  )
}
