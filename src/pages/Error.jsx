import React, { useEffect } from 'react'
import errorImg from '../assets/error.png'
import { Link } from 'react-router'

const Error = () => {
  useEffect(() => {
    document.title = 'Error 404 | ChakriKhuji'
  }, [])
  return (
    <div className='bg-gray-200'>
      <div className='w-11/12 mx-auto min-h-screen '>
        <div className='flex flex-col justify-center items-center pt-[100px]'>
          <img
            className='w-[350px] h-[270px] rounded-lg'
            src={errorImg}
            alt=''
          />
          <Link to='/' className='btn bg-red-500 text-white  mt-8'>
            Go to home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Error
