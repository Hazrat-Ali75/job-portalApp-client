import React from 'react'
import { HiBriefcase, HiCalendarDateRange } from 'react-icons/hi2'
import { TfiLocationPin } from 'react-icons/tfi'
import { Link } from 'react-router'

const JobCard = ({ job }) => {
  return (
    <div className='border-1 border-gray-400 rounded-xl p-4'>
      <div className='flex gap-3'>
        <img className='w-16 h-16' src={job.company_logo} alt='' />
        <div>
          <h3 className='text-lg font-medium'>{job.category}</h3>
          <p className='text-gray-500 flex gap-1 items-center'>
            <TfiLocationPin /> {job.location}
          </p>
        </div>
      </div>
      <div className='my-3'>
        <h3 className='text-lg font-medium'>{job.title}</h3>
        <div className='flex gap-7 text-gray-500'>
          <p className='flex items-center gap-1'><HiBriefcase size={20} />{job.jobType}</p>
          <p className='flex items-center gap-1'><HiCalendarDateRange size={20} />Deadline : {job.applicationDeadline}</p>
        </div>
      </div>
      <p className='mb-3'>{job.description}</p>
      <div className='flex gap-2'>
        {
            job.requirements.map((req,idx )=> <p key={idx++} className='bg-blue-100 p-1 rounded-sm'>{req}</p>)
        }
      </div>
      <div className='my-3 flex items-center justify-between'>
        <p>
            <span className='text-lg font-medium text-blue-500 mr-2'>{job.salaryRange.currency.toUpperCase()}</span>
            <span className='text-lg font-medium text-blue-500'>{job.salaryRange.min} - </span>
            <span className='text-lg font-medium text-blue-500'>{job.salaryRange.max}</span>
            <span className='text-gray-500'>/Month</span>
        </p>
        <Link to={`/jobdetails/${job._id}`}>
        <button className='btn bg-blue-500 text-white text-xs w-[100px]'>Show More</button>
        </Link>
      </div>
    </div>
  )
}

export default JobCard
