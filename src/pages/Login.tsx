import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { axiosClient } from '../api/axios'
import { apiImg, requests } from '../api/requests'
import { Helmet } from '../components/Helmet'

interface Ibanner {
  backdrop_path: string
}

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [banner, setBanner] = useState<Ibanner>(Object)

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axiosClient.get(requests.requestMovie)
        setBanner(res.data.results[5])
      } catch (error) {
        console.log(error)
      }
    }

    return () => {
      fetchBanner()
    }
  }, [])

  return (
    <Helmet title="Đăng nhập">
      <div className="relative">
        <img
          src={apiImg.originalImage(banner?.backdrop_path)}
          alt=""
          className="opacity-50 hidden md:block"
        />
      </div>
      <div className="mx-auto my-10 w-[80%] flex flex-col items-center justify-center md:absolute top-[80px] right-0 left-0">
        <span className="text-4xl font-bold">Đăng nhập</span>
        <form className="w-[400px] md:w-[500px] p-10 rounded bg-transparent text-black flex flex-col justify-center items-center">
          <input
            value={email}
            type="text"
            placeholder="Enter your email"
            className="px-4 py-2 mb-5 w-full rounded outline-none"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            value={password}
            type="password"
            placeholder="Enter your password"
            className="px-4 py-2 mb-5 w-full rounded outline-none"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="px-4 py-2 w-max bg-red-600 text-white  mt-5 rounded font-semibold"
            onClick={(e) => {
              e.preventDefault()
            }}
          >
            Đăng nhập
          </button>
          <p className="mt-5 text-textGray">
            Chưa có tài khoản?
            <Link to="/signup">
              {' '}
              <span className="text-white font-semibold">Đăng kí</span>
            </Link>
          </p>
        </form>
      </div>
    </Helmet>
  )
}
