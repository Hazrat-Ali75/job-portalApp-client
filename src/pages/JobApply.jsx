import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useParams } from 'react-router'
import axios from 'axios'

const JobApply = () => {
  const { id } = useParams()
  const { user } = useContext(AuthContext)

  const handleSubmit = e => {
    e.preventDefault()

    const form = e.target
    const linkedin = form.linkedin.value
    const github = form.github.value
    const resume = form.resume.value

    const application = {
      jobId: id,
      applicant: user.email,
      linkedin,
      github,
      resume
    }
    axios
      .post(
        'https://job-portal-app-server-hazel.vercel.app/applications',
        application
      )
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div className='flex justify-center items-center py-14'>
      <form onSubmit={handleSubmit}>
        <fieldset className='fieldset bg-white shadow-xl border-base-300 rounded-box w-xs border p-4'>
          <h3 className='text-lg font-medium text-center'>
            Please submit details
          </h3>
          <label className='label'>LikedIn</label>
          <input
            type='url'
            className='input'
            name='linkedin'
            placeholder='Enter LinkedIn Profile'
          />

          <label className='label'>Github</label>
          <input
            type='url'
            className='input'
            name='github'
            placeholder='Enter Github Profile'
          />

          <label className='label'>Resume</label>
          <input
            type='url'
            className='input'
            name='resume'
            placeholder='Enter Resume link'
          />

          <label className='label'>Users Email</label>
          <input
            type='email'
            className='input'
            readOnly
            defaultValue={user.email}
          />
          <button
            type='submit'
            className='btn bg-blue-500 text-white font-medium mt-3'
          >
            Apply
          </button>
        </fieldset>
      </form>
    </div>
  )
}

export default JobApply
