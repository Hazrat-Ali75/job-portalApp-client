import React, { use } from 'react'
import JobCard from './JobCard'

const Jobcontainer = ({ jobDataPromise }) => {
  const jobData = use(jobDataPromise)
//   console.log(jobData)
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
      {jobData.map(job => (
        <JobCard key={job._id} job={job}></JobCard>
      ))}
    </div>
  )
}

export default Jobcontainer
