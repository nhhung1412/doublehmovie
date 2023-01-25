import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

import { AiOutlineSearch } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'

import userIcon from '../assets/images/user.jpg'

import { Logo } from './Logo'

import { motion } from 'framer-motion'

const ListMenuHeader: React.FC = () => {
  return (
    <>
      <li>
        <NavLink to="/phimle">Phim lẻ</NavLink>
      </li>
      <li>
        <NavLink to="/phimbo">Phim bộ</NavLink>
      </li>
      <li>
        <NavLink to="/phimchieurap">Phim chiếu rạp</NavLink>
      </li>
      <li>
        <NavLink to="/theloai">Thể loại</NavLink>
      </li>
    </>
  )
}

export const Header: React.FC = () => {
  const [isOpen, SetIsOpen] = useState<boolean>(false)
  const [openSearch, SetOpenSearch] = useState<boolean>(false)
  const [openUser, SetOpenUser] = useState<boolean>(false)

  const handleToggle = () => {
    SetIsOpen(!isOpen)
  }

  return (
    <header className="bg-white sticky top-0 r-0 z-50 text-black h-header ">
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
            className={`absolute top-[80px]  bottom-0 bg-white z-[100] h-[100vh] w-1/2 md:w-1/3 lg:hidden transition-all ease-in-out duration-[400ms] ${
              isOpen ? 'left-0' : 'left-[-450px]'
            }`}
          >
            <ul
              className="flex flex-col justify-center items-start ml-10 mt-5 gap-9 text-lg "
              onClick={() => handleToggle()}
            >
              <ListMenuHeader />
            </ul>
          </div>

          {/* site header left */}
          <div className="flex justify-center items-center gap-10">
            <Logo />
            <ul className="hidden lg:flex justify-center gap-9">
              <ListMenuHeader />
            </ul>
          </div>
          {/* site header right */}
          <div className="flex justify-center items-center gap-5">
            <form className="hidden md:flex border border-gray rounded-3xl px-4 py-[6px] focus-within:shadow-shadowHover">
              <input
                type="search"
                className="outline-none px-2 placeholder:text-sm w-full"
                placeholder="Search...."
                required
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
                    <form className="flex md:hidden border border-gray rounded-3xl px-4 py-[6px] focus-within:shadow-shadowHover">
                      <input
                        type="search"
                        className="outline-none px-2 placeholder:text-sm w-full"
                        placeholder="Search...."
                        required
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
                whileTap={{ scale: '1.4' }}
                src={userIcon}
                alt="user icon"
                className="w-8 h-8 object-cover duration-300"
              />
              <MdKeyboardArrowDown className="text-base text-gray" />
            </div>
            {openUser ? (
              <div
                className="absolute bottom-[-70px] right-6 bg-white p-2  flex flex-col items-start z-[1000] shadow-shadow
              "
              >
                <motion.button
                  whileTap={{ scale: '1.1' }}
                  className="px-3 py-1 w-full border mb-1 rounded-sm"
                  onClick={() => SetOpenUser(!openUser)}
                >
                  <Link to="/dangki">Đăng kí </Link>
                </motion.button>
                <motion.button
                  whileTap={{ scale: '1.1' }}
                  className="px-3 py-1 w-full bg-bgMain text-white rounded-sm"
                  onClick={() => SetOpenUser(!openUser)}
                >
                  <Link to="/dangnhap">Đăng nhập </Link>
                </motion.button>
              </div>
            ) : null}
          </div>
        </nav>
      </div>
    </header>
  )
}
