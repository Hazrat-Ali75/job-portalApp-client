import React from 'react'
import { motion } from 'motion/react'
import team1 from '../assets/team1.jpg'
import team2 from '../assets/team2.jpg'

const Banner = () => {
  return (
    <div className='hero bg-base-200 min-h-[450px] rounded-lg'>
      <div className='hero-content flex-col lg:flex-row-reverse gap:4'>
        <div className='flex-1'>
          <motion.img
            src={team1}
            animate={{
              y: [80, 125, 80],
              transition: {
                duration: 10,
                delay: 15,
                repeat: Infinity
              }
            }}
            className='w-[250px] lg:max-w-sm border-red-300 border-s-8 border-b-8  rounded-t-4xl rounded-br-4xl shadow-2xl'
          />
          <motion.img
            src={team2}
            animate={{
              x: [100, 145, 100],
              transition: {
                duration: 10,
                delay: 15,
                repeat: Infinity
              }
            }}
            className='w-[250px] lg:max-w-sm border-red-300 border-s-8 border-b-8  rounded-t-4xl rounded-br-4xl shadow-2xl'
          />
        </div>
        <div className='flex-1'>
          <h1 className='text-4xl font-bold'>
            Latest{' '}
            <motion.span
              animate={{
                color: ['#ff5733', '#33ff3c', '#3364ff'],
                transition: { duration: 2, repeat: Infinity }
              }}
            >
              Jobs
            </motion.span>{' '}
            Are Here!
          </h1>
          <p className='py-6'>
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
          <button className='btn btn-primary'>Find Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Banner
