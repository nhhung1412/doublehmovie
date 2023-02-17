import { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'

import { AiOutlineSearch } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'

import userIcon from '../assets/images/user.jpg'

import { Logo } from './Logo'

import { motion } from 'framer-motion'
import { Genres } from '../assets/Link'

import { useAuth } from '../hooks/useAuth'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase.config'

import { toast } from 'react-toastify'

interface ToggleProps {
  handleToggle: () => void
}

const ListMenuHeader: React.FC<ToggleProps> = ({ handleToggle }) => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const handleActiveMenu = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <li onClick={() => handleToggle()}>
        <NavLink to="/phimle" className="hover:text-red-600 transition">
          Phim lẻ
        </NavLink>
      </li>
      <li onClick={() => handleToggle()}>
        <NavLink to="/phimbo" className="hover:text-red-600 transition">
          Phim bộ
        </NavLink>
      </li>
      <li onClick={() => handleToggle()}>
        <NavLink to="/phimchieurap" className="hover:text-red-600 transition">
          Phim chiếu rạp
        </NavLink>
      </li>
      <li onClick={() => handleToggle()}>
        <NavLink to="/favorite" className="hover:text-red-600 transition">
          Yêu thích
        </NavLink>
      </li>
      <li className="relative">
        <span
          className="hover:text-red-600 transition cursor-pointer flex items-center gap-1"
          onClick={() => handleActiveMenu()}
        >
          Thể loại <MdKeyboardArrowDown className="text-base text-gray" />
        </span>
        {isActive ? (
          <div
            className="absolute top-[25px] lg:top-[52px] left-0 md:left-2 lg:left-[-10px] h-max w-max rounded-b-sm bg-white text-black 
          grid grid-cols-1 gap-2 p-3
          lg:gap-4 lg:grid-cols-2
          "
          >
            {Genres.map((item) => (
              <NavLink
                key={item.idCate}
                to={`/genre/${item.idCate}/${item.nameCate}`}
                className="hover:text-red-600 transition"
                onClick={() => handleActiveMenu()}
              >
                <span onClick={() => handleToggle()}>{item.nameCate}</span>
              </NavLink>
            ))}
          </div>
        ) : null}
      </li>
    </>
  )
}

export const Header: React.FC = () => {
  const [isOpen, SetIsOpen] = useState<boolean>(false)
  const [openSearch, SetOpenSearch] = useState<boolean>(false)
  const [openUser, SetOpenUser] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')

  const logout = async () => {
    try {
      await signOut(auth).then(() => {
        SetOpenUser(!openUser)

        toast.success('Đăng xuất thành công!')
        navigate('/')
      })
    } catch (error) {
      toast.error('Đăng xuất thất bại!')
    }
  }

  const { currentUser } = useAuth()

  const navigate = useNavigate()

  const handleToggle = () => {
    SetIsOpen(!isOpen)
  }

  return (
    <header className="bg-white sticky top-0 r-0 z-[1000] text-black h-header ">
      <div className="md:container-fluid relative">
        <nav className="flex items-center justify-between min-h-[80px] ml-20 mr-5">
          {/* menu mobile bar */}
          {!isOpen ? (
            <RxHamburgerMenu
              className="absolute top-7 left-7 text-2xl block lg:hidden z-[1000] cursor-pointer"
              onClick={() => handleToggle()}
            />
          ) : (
            <AiOutlineClose
              className="text-2xl absolute top-7 left-7 z-[1000] cursor-pointer"
              onClick={() => handleToggle()}
            />
          )}
          <div
            className={`absolute top-[79px]  bottom-0 bg-white z-[100] h-[100vh] w-1/2 md:w-1/3 lg:hidden transition ${
              isOpen ? 'left-0' : 'left-[-450px]'
            }`}
          >
            <ul
              className="flex flex-col justify-start items-start 
       ml-4 gap-4 md:gap-6 text-base md:text-lg 
       overflow-auto md:overflow-hidden h-[85vh]
       my-5
       "
            >
              <ListMenuHeader handleToggle={handleToggle} />
            </ul>
          </div>

          {/* site header left */}
          <div className="flex justify-center items-center gap-10">
            <Logo />
            <ul className="hidden lg:flex justify-center gap-9">
              <ListMenuHeader
                handleToggle={function (): void {
                  throw new Error('Function not implemented.')
                }}
              />
            </ul>
          </div>
          {/* site header right */}
          <div className="flex justify-center items-center gap-5">
            <form
              className="hidden md:flex border border-gray rounded-3xl px-4 py-[6px] focus-within:shadow-shadowHover"
              onSubmit={(e) => {
                e.preventDefault()
                setSearch('')
                navigate(`/search/${search}`)
              }}
            >
              <input
                type="search"
                className="outline-none px-2 placeholder:text-sm w-full"
                placeholder="Search...."
                required
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit">
                <AiOutlineSearch className="text-2xl" />
              </button>
            </form>
            <div>
              <AiOutlineSearch
                className="text-2xl md:hidden cursor-pointer"
                onClick={() => SetOpenSearch(!openSearch)}
              />
              {openSearch ? (
                <>
                  <div className="absolute bottom-[-60px] bg-white w-full left-0 p-3">
                    <form
                      className="flex md:hidden border border-gray rounded-3xl px-4 py-[6px] focus-within:shadow-shadowHover"
                      onSubmit={(e) => {
                        e.preventDefault()
                        setSearch('')
                        navigate(`/search/${search}`)
                      }}
                    >
                      <input
                        type="search"
                        className="outline-none px-2 placeholder:text-sm w-full"
                        placeholder="Search...."
                        required
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      <button type="submit">
                        <AiOutlineSearch className="text-2xl " />
                      </button>
                    </form>
                  </div>
                </>
              ) : null}
            </div>
            <div
              className="flex justify-center items-center gap-1 cursor-pointer relative"
              onClick={() => SetOpenUser(!openUser)}
            >
              <motion.img
                whileTap={{ scale: 1.2 }}
                src={currentUser ? currentUser.photoURL : userIcon}
                alt="user icon"
                className="w-8 h-8 object-cover rounded-full"
              />
              <MdKeyboardArrowDown className="text-base text-gray" />
            </div>
            <>
              {openUser ? (
                <>
                  {!currentUser ? (
                    <div className="absolute top-[70px] right-6 bg-white p-2  flex flex-col  gap-1  items-start z-[1000] shadow-shadow">
                      <motion.button
                        whileTap={{ scale: 1.1 }}
                        className="px-3 py-1 w-full border  rounded-sm"
                        onClick={() => SetOpenUser(!openUser)}
                      >
                        <Link to="/signup">Đăng kí</Link>
                      </motion.button>

                      <motion.button
                        whileTap={{ scale: 1.1 }}
                        className="px-3 py-1 w-full bg-bgMain text-white rounded-sm"
                        onClick={() => SetOpenUser(!openUser)}
                      >
                        <Link to="/login">Đăng nhập</Link>
                      </motion.button>
                    </div>
                  ) : (
                    <div className="absolute top-[70px] right-6 bg-white p-2  flex flex-col gap-1 items-start z-[1000] shadow-shadow">
                      <div>
                        <span className="">Xin chào: </span>
                        <span className="font-semibold">
                          {currentUser?.displayName}
                        </span>
                      </div>

                      <motion.button
                        whileTap={{ scale: 1.1 }}
                        className="px-3 py-1 w-full border  rounded-sm bg-transparent text-black"
                        onClick={() => SetOpenUser(!openUser)}
                      >
                        <Link to="/favorite">Danh sách yêu thích </Link>
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 1.1 }}
                        className="px-3 py-1 w-full border  rounded-sm bg-bgMain text-white"
                        onClick={logout}
                      >
                        <span>Đăng xuất </span>
                      </motion.button>
                    </div>
                  )}
                </>
              ) : null}
            </>
          </div>
        </nav>
      </div>
    </header>
  )
}
