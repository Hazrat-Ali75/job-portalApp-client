import axios from 'axios'
import React from 'react'

const AddJobForm = () => {
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target

    const job = {
      title: form.title.value,
      location: form.location.value,
      jobType: form.jobType.value,
      category: form.category.value,
      applicationDeadline: form.applicationDeadline.value,
      salaryRange: {
        min: parseInt(form.salaryMin.value),
        max: parseInt(form.salaryMax.value),
        currency: form.currency.value.toLowerCase()
      },
      description: form.description.value,
      company: form.company.value,
      requirements: form.requirements.value
        .split(',')
        .map(skill => skill.trim()),
      responsibilities: form.responsibilities.value
        .split(',')
        .map(task => task.trim()),
      status: form.status.value,
      hr_email: form.hr_email.value,
      hr_name: form.hr_name.value,
      company_logo: form.company_logo.value
    }

    axios
      .post('https://job-portal-app-server-hazel.vercel.app/jobs', job)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })

    // console.log(job)
    // You can now send `job` to your backend
  }

  return (
    <div className='py-14'>
      <form
        onSubmit={handleSubmit}
        className='p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md space-y-6'
      >
        <h2 className='text-2xl text-center font-bold mb-4'>Add Job</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <input
            name='title'
            placeholder='Job Title'
            className='border p-2 rounded'
            required
          />
          <input
            name='location'
            placeholder='Location'
            className='border p-2 rounded'
            required
          />
          <input
            name='jobType'
            placeholder='Job Type (e.g. Hybrid)'
            className='border p-2 rounded'
            required
          />
          <input
            name='category'
            placeholder='Category'
            className='border p-2 rounded'
            required
          />
          <input
            type='date'
            name='applicationDeadline'
            className='border p-2 rounded'
            required
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <input
            name='salaryMin'
            type='number'
            placeholder='Min Salary'
            className='border p-2 rounded'
            required
          />
          <input
            name='salaryMax'
            type='number'
            placeholder='Max Salary'
            className='border p-2 rounded'
            required
          />
          <input
            name='currency'
            placeholder='Currency (e.g. BDT)'
            className='border p-2 rounded'
            required
          />
        </div>

        <textarea
          name='description'
          placeholder='Job Description'
          className='w-full border p-2 rounded'
          rows='3'
          required
        />
        <input
          name='company'
          placeholder='Company Name'
          className='w-full border p-2 rounded'
          required
        />

        <textarea
          name='requirements'
          placeholder='Requirements (comma separated)'
          className='w-full border p-2 rounded'
          rows='2'
          required
        />
        <textarea
          name='responsibilities'
          placeholder='Responsibilities (comma separated)'
          className='w-full border p-2 rounded'
          rows='2'
          required
        />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <input
            name='status'
            placeholder='Status (e.g. active)'
            className='border p-2 rounded'
            required
          />
          <input
            name='company_logo'
            placeholder='Company Logo URL'
            className='border p-2 rounded'
            required
          />
          <input
            name='hr_name'
            placeholder='HR Name'
            className='border p-2 rounded'
            required
          />
          <input
            name='hr_email'
            type='email'
            placeholder='HR Email'
            className='border p-2 rounded'
            required
          />
        </div>

        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'
        >
          Submit Job
        </button>
      </form>
    </div>
  )
}

export default AddJobForm
