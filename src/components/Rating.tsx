import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

import { Ivote } from '../Type'

export const Rating: React.FC<Ivote> = ({ vote }) => {
  return (
    <div className="flex">
      <span>
        {vote >= 2 ? <BsStarFill /> : vote >= 1.5 ? <BsStarHalf /> : <BsStar />}
      </span>
      <span>
        {vote >= 4 ? <BsStarFill /> : vote >= 3.5 ? <BsStarHalf /> : <BsStar />}
      </span>
      <span>
        {vote >= 6 ? <BsStarFill /> : vote >= 5.5 ? <BsStarHalf /> : <BsStar />}
      </span>
      <span>
        {vote >= 8 ? <BsStarFill /> : vote >= 7.5 ? <BsStarHalf /> : <BsStar />}
      </span>
      <span>
        {vote >= 10 ? (
          <BsStarFill />
        ) : vote >= 9.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    </div>
  )
}
