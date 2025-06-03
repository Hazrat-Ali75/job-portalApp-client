import React, { use } from 'react'
import { Link } from 'react-router'

const MyPostedJobList = ({ myPostedJobPromise }) => {
  const myPostedJobs = use(myPostedJobPromise)
  console.log(myPostedJobs)
  return (
    <div>
      <h1 className='text-3xl font-semibold text-center py-7'>
        My Total Posted Job :{myPostedJobs.length}
        <div className='overflow-x-auto py-14'>
          <table className='table w-[700px] mx-auto'>
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Job Title</th>
                <th>Company</th>
                <th>Total Application</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myPostedJobs.map((job, index) => (
                <tr key={job._id}>
                  <th>{index + 1}</th>
                  <td>{job.title}</td>
                  <td>{job.company}</td>
                  <td>
                    <Link
                      className='bg-amber-500 text-white p-1 rounded-xs'
                      to={`/totalApplications/${job._id}`}
                    >
                      View Applications
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </h1>
    </div>
  )
}

export default MyPostedJobList
