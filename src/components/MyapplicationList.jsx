import React, { use } from 'react'
import ApplicationRow from './ApplicationRow'

const MyapplicationList = ({ myApplicationPromise }) => {
  const application = use(myApplicationPromise)
//   console.log(application)
  return (
    <div>
      <h1 className='text-3xl text-center font-semibold my-6 '>
        Total jobs you applied : {application.length}
      </h1>
      <div className='overflow-x-auto py-10'>
        <table className='table w-[700px] mx-auto'>
          {/* head */}
          <thead>
            <tr>
              <th>Company</th>
              <th>Role</th>
              <th>Resume</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {application.map(appli => (
              <ApplicationRow key={appli._id} appli={appli}></ApplicationRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyapplicationList
