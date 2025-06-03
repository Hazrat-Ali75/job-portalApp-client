import { Briefcase, Calendar, DollarSign, Mail, MapPin } from 'lucide-react'
import React from 'react'
import { Link, useLoaderData } from 'react-router'

const Jobdetails = () => {
  const job = useLoaderData()

  return (
    <div className='max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-6 space-y-4 border-gray-300 my-10'>
      <div className='flex items-center space-x-4'>
        <img
          src={job.company_logo}
          alt='Company Logo'
          className='w-16 h-16 rounded-full'
        />
        <div>
          <h2 className='text-2xl font-bold'>{job.title}</h2>
          <p className='text-sm text-gray-500'>{job.company}</p>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700'>
        <div className='flex items-center gap-2'>
          <MapPin className='w-4 h-4' /> {job.location}
        </div>
        <div className='flex items-center gap-2'>
          <Briefcase className='w-4 h-4' /> {job.jobType}
        </div>
        <div className='flex items-center gap-2'>
          <Calendar className='w-4 h-4' /> Apply by {job.applicationDeadline}
        </div>
        <div className='flex items-center gap-2'>
          <DollarSign className='w-4 h-4' />{' '}
          {job.salaryRange.min} -{' '}
          {job.salaryRange.max}{' '}
          {job.salaryRange.currency.toUpperCase()}
        </div>
      </div>

      <div>
        <h3 className='font-semibold text-lg'>Job Description</h3>
        <p className='text-gray-700'>{job.description}</p>
      </div>

      <div>
        <h3 className='font-semibold text-lg'>Responsibilities</h3>
        <ul className='list-disc list-inside text-gray-700'>
          {job.responsibilities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className='font-semibold text-lg'>Requirements</h3>
        <ul className='list-disc list-inside text-gray-700'>
          {job.requirements.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div className='border-t pt-4 flex justify-between'>
        <div>
        <h3 className='text-sm font-medium'>Contact HR</h3>
        <p className='text-gray-700'>
          {job.hr_name} &nbsp;|&nbsp; <Mail className='inline w-4 h-4 mr-1' />{' '}
          <a
            href={`mailto:${job.hr_email}`}
            className='text-blue-600 hover:underline'
          >
            {job.hr_email}
          </a>
        </p>
        </div>
        <div>
        <Link to={`/jobApply/${job._id}`}>
        <button className='btn bg-blue-500 text-white font-medium'>Apply Now</button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Jobdetails
