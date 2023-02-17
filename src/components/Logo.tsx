import { RiMovie2Fill } from 'react-icons/ri'

import { Link } from 'react-router-dom'

export const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <RiMovie2Fill className="text-5xl text-red-500" />
      <div className="flex items-start justify-center flex-col leading-[20px] text-2xl">
        <span className="text-red-500  font-bold">DoubleH</span>
        <span className="  font-bold">Movie</span>
      </div>
    </Link>
  )
}
