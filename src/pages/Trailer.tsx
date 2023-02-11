import { useEffect, useState } from 'react'
import { axiosClient } from '../api/axios'
import { useParams } from 'react-router-dom'
import { API_KEY } from '../api/requests'
import { Comment } from '../components/MovieDetail/Comment'
import { SimilarMovies } from '../components/MovieDetail/SimilarMovies'
import { TopRatedMovie } from '../components/MovieDetail/TopRatedMovie'

interface ITrailer {
  name: string
  key: string
}

export const Trailer: React.FC = () => {
  const [video, setVideo] = useState<ITrailer>(Object)
  const { id } = useParams()

  useEffect(() => {
    axiosClient
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        const trailer = res.data.results.filter(
          (item: { type: string }) => item.type === 'Trailer',
        )
        setVideo(trailer[0])
      })
      .catch((error) => console.log(error.message))
  }, [id])

  console.log(video)

  return (
    <div className="mx-5 my-5 md:mx-20 lg:mx-40">
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
    </div>
  )
}
