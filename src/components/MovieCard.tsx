import { Link } from 'react-router-dom'

import { AiFillPlayCircle } from 'react-icons/ai'

import { ImovieCard } from '../Type'

import { Rating } from './Rating'

import { apiImg } from '../api/requests'

import { useAuth } from '../hooks/useAuth'

export const MovieCard: React.FC<ImovieCard> = ({ movie }) => {
  return (
    <div className="relative">
      <Link to={`/movie/${movie?.id}`} className="group">
        <img
          src={apiImg.w500Image(movie?.backdrop_path)}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null // prevents looping
            currentTarget.src =
              'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'
          }}
          alt={movie?.title}
          className="w-full h-auto object-cover group-hover:transform group-hover:scale-[1.2] group-hover:opacity-70 transition "
        />
        <span className="absolute bg-bg06 bottom-0 w-full h-11 px-4 py-2 truncate font-semibold">
          {movie?.title || movie?.name}
        </span>
        <span
          className="absolute text-red-600 bottom-1/2 right-1/2 rounded-full 
            font-semibold text-8xl transform translate-y-1/2 translate-x-1/2 opacity-0  group-hover:opacity-80 transition group-hover:transform group-hover:scale-75
            "
        >
          <AiFillPlayCircle />
        </span>

        <span className="absolute text-yellow-400 top-1 left-1">
          <Rating vote={movie?.vote_average} />
        </span>
      </Link>
      <span className="absolute bg-gradient-to-r from-red-600 to-yellow-400 top-1 right-1 px-2 rounded-xl truncate">
        {movie?.release_date?.slice(0, 4) || movie?.first_air_date?.slice(0, 4)}
      </span>
    </div>
  )
}
