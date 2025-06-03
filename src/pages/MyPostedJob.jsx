import React, { Suspense, useContext } from 'react'
import MyPostedJobList from '../components/MyPostedJobList'
import { myPostedJobPromise } from '../api/postedJobApi'
import { AuthContext } from '../context/AuthContext'

const MyPostedJob = () => {
  const { user } = useContext(AuthContext)
  return (
    <div>
      <Suspense
        fallback={
          <div className='h-[600px] flex justify-center items-center'>
            <span className='loading loading-spinner text-success'></span>
          </div>
        }
      >
        <MyPostedJobList
          myPostedJobPromise={myPostedJobPromise(user.email)}
        ></MyPostedJobList>
      </Suspense>
    </div>
  )
}

export default MyPostedJob
