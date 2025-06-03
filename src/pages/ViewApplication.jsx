import axios from 'axios'
import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router'

const ViewApplication = () => {
  const { jobId } = useParams()
  const applications = useLoaderData()

  const handleUpdateStatus = (e, id) => {
    console.log(e.target.value, id)
    axios
      .patch(
        `https://job-portal-app-server-hazel.vercel.app/applications/${id}`,
        { status: e.target.value }
      )
      .then(res => console.log(res.data))
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div>
      <h2 className='text-3xl font-semibold text-center py-10'>
        <span className='mr-4 bg-amber-500 text-white rounded-sm px-3'>
          {applications.length}
        </span>
        Application for this job : {jobId}
      </h2>
      <div className='overflow-x-auto rounded-box bg-base-100 py-15'>
        <table className='table w-[700px] mx-auto'>
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Applicant Email</th>
              <th>Github</th>
              <th>Application Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applications.map((application, idx) => (
              <tr key={application._id}>
                <th>{idx + 1}</th>
                <td>{application.applicant}</td>
                <td>
                  <Link
                    to={`${application.github}`}
                    className='bg-amber-500 p-1 rounded-xs text-white'
                  >
                    Github
                  </Link>
                </td>
                <td>
                  <select
                    onChange={e => handleUpdateStatus(e, application._id)}
                    defaultValue={application.status}
                    className='select select-accent'
                  >
                    <option disabled={true}>Staus</option>
                    <option>Pending</option>
                    <option>Rejected</option>
                    <option>InterView</option>
                    <option>Hired</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewApplication
