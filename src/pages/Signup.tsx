import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { Link, useNavigate } from 'react-router-dom'

import {
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { auth, db, storage } from '../firebase.config'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'

import { axiosClient } from '../api/axios'
import { apiImg, requests } from '../api/requests'
import { Helmet } from '../components/Helmet'
import { toast } from 'react-toastify'
import { RotatingLines } from 'react-loader-spinner'

interface Ibanner {
  backdrop_path: string
}

export const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [file, setFile] = useState<any | null>(null)
  const [banner, setBanner] = useState<Ibanner>(Object)
  const [loading, setLoading] = useState<boolean>(false)

  const navigate = useNavigate()

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      toast.error('Select a file')
      return
    } else {
      setFile(e.target.files[0])
    }
  }

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

  const signup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )
      const user = userCredential.user
      console.log(user)

      const fileName = `images/ ${Date.now() + file.name}`
      const storageRef = ref(storage, fileName)
      const uploadTask = uploadBytesResumable(storageRef, file)
      uploadTask.on('state_changed', () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          if (downloadURL) {
            console.log('File available at', downloadURL)
            await setDoc(doc(db, 'users', user.uid), {
              displayName: email,
              email: email,
              photoURL: downloadURL,
              timeStamp: serverTimestamp(),
            })
            await updateProfile(user, {
              displayName: email,
              photoURL: downloadURL,
            })
          } else {
            toast.error('Ảnh bị lỗi!')
            navigate('/signup')
          }
        })
      })
      navigate('/login')
      setLoading(false)
      toast.success('Đăng kí thành công!')
      signOut(auth)
        .then(() => {
          navigate('/login')
        })
        .catch((error) => {
          toast.error(error.message)
        })
    } catch (error) {
      setLoading(false)
      toast.error('Đăng kí thất bại! Vui lòng đăng kí lại')
    }
  }

  return (
    <Helmet title="Đăng kí">
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
              className="opacity-50 object-cover hidden md:block"
            />
          </div>
          <div className="mx-auto my-10 w-[80%] flex flex-col items-center justify-center md:absolute top-[80px] right-0 left-0">
            <span className="text-4xl font-bold">Đăng kí</span>
            <form
              className="w-[400px] md:w-[500px] p-10 rounded bg-transparent text-black flex flex-col justify-center items-center"
              onSubmit={signup}
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

              <label className="flex flex-row-reverse justify-around items-center gap-5 md:p-2 lg:p-5 border rounded w-full">
                <input type="file" onChange={onChangeFile} className="hidden" />
                <p className="text-white font-semibold">Chọn ảnh đại diện</p>
                <img
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                  }
                  alt=""
                  className="w-16 h-16 md:w-16 md:h-16 lg:h-24 lg:w-24 rounded-full object-cover"
                />
              </label>

              <motion.button
                whileTap={{ scale: 1.2 }}
                type="submit"
                className="px-4 py-2 w-max bg-red-600 text-white  mt-5 rounded font-semibold"
              >
                Đăng kí
              </motion.button>
              <p className="mt-5 text-textGray">
                Đã có tài khoản?
                <Link to="/login">
                  <span className="text-white font-semibold"> Đăng nhập</span>
                </Link>
              </p>
            </form>
          </div>
        </>
      )}
    </Helmet>
  )
}
