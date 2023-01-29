import { Link } from 'react-router-dom'

import { AiFillPlayCircle } from 'react-icons/ai'

import { ImovieCard } from '../Type'
import { Fragment } from 'react'

export const MovieCard: React.FC<ImovieCard> = ({ movie }) => {
  return (
    <Fragment>
      <Link to="/" className="group">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
          alt={movie?.title}
          className="w-full h-auto object-cover relative group-hover:transform group-hover:scale-[1.2] group-hover:opacity-70 transition "
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
      </Link>
      <span className="absolute bg-gradient-to-r from-red-600 to-yellow-400 top-1 right-1 px-2 rounded-xl truncate">
        {movie?.release_date?.slice(0, 4) || movie?.first_air_date?.slice(0, 4)}
      </span>
    </Fragment>
  )
}
