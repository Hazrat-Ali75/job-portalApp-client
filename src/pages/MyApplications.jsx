import React, { Suspense, useContext } from 'react'
import MyapplicationList from '../components/MyapplicationList'
import { AuthContext } from '../context/AuthContext'
import { myApplicationPromise } from '../api/applicationsApi'


const MyApplications = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className=''>
      <Suspense
        fallback={
          <div className='h-[600px] flex justify-center items-center'>
            <span className='loading loading-spinner text-success'></span>
          </div>
        }
      >
        <MyapplicationList
          myApplicationPromise={myApplicationPromise(user.email)}
        ></MyapplicationList>
      </Suspense>
    </div>
  )
}

export default MyApplications
