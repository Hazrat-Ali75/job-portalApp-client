import React from 'react'
import Banner from '../components/Banner'
import Jobcontainer from '../components/Jobcontainer'

const jobDataPromise = fetch(
  'https://job-portal-app-server-hazel.vercel.app/jobs'
).then(res => res.json())

const Home = () => {
  return (
    <div>
      <div className='w-11/12 mx-auto py-[24px]'>
        <Banner></Banner>
      </div>
      <div className='w-11/12 mx-auto py-[24px]'>
        <h1 className='text-3xl font-semibold text-center py-10'>
          Hot Jobs Are Here
        </h1>
        <Jobcontainer jobDataPromise={jobDataPromise}></Jobcontainer>
      </div>
    </div>
  )
}

export default Home
