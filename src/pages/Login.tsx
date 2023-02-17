import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { RotatingLines } from 'react-loader-spinner'

import { axiosClient } from '../api/axios'
import { apiImg, requests } from '../api/requests'
import { Helmet } from '../components/Helmet'
import { auth } from '../firebase.config'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'

interface Ibanner {
  backdrop_path: string
}

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [banner, setBanner] = useState<Ibanner>(Object)
  const [loading, setLoading] = useState<boolean>(false)

  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    const getBanner = async () => {
      try {
        const res = await axiosClient.get(requests?.requestMovieTheatres)
        setLoading(false)
        setBanner(res?.data?.results[0])
      } catch (error) {
        setLoading(false)
        toast.error('error')
      }
    }
    getBanner()
  }, [])

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      )

      const user = userCredential.user
      console.log(user)
      setLoading(false)
      toast.success('Đăng nhập thành công!')
      navigate('/')
    } catch (error) {
      setLoading(false)
      toast.error('Đăng nhập thất bại! Vui lòng đăng nhập lại')
    }
  }

  return (
    <Helmet title="Đăng nhập">
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
          <div className="relative">
            <img
              src={apiImg.originalImage(banner?.backdrop_path)}
              alt=""
              className="opacity-50 hidden md:block"
            />
          </div>
          <div className="mx-auto my-10 w-[80%] flex flex-col items-center justify-center md:absolute top-[80px] right-0 left-0">
            <span className="text-4xl font-bold">Đăng nhập</span>
            <form
              className="w-[400px] md:w-[500px] p-10 rounded bg-transparent text-black flex flex-col justify-center items-center"
              onSubmit={login}
            >
              <input
                value={email}
                type="text"
                placeholder="Nhập email của bạn"
                className="px-4 py-2 mb-5 w-full rounded outline-none"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                value={password}
                type="password"
                placeholder="Nhập mật khẩu"
                className="px-4 py-2 mb-5 w-full rounded outline-none"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="px-4 py-2 w-max bg-red-600 text-white  mt-5 rounded font-semibold"
              >
                Đăng nhập
              </motion.button>
              <p className="mt-5 text-textGray">
                Chưa có tài khoản?
                <Link to="/signup">
                  {' '}
                  <span className="text-white font-semibold">Đăng kí</span>
                </Link>
              </p>
            </form>
          </div>
        </>
      )}
    </Helmet>
  )
}
