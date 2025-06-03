import { createBrowserRouter } from 'react-router'
import RootLayout from '../layout/RootLayout'
import Home from '../pages/Home'
import AuthLayout from '../layout/AuthLayout'
import Register from '../components/Register'
import Login from '../components/Login'
import Jobdetails from '../pages/Jobdetails'
import PrivateProvider from '../provider/PrivateProvider'
import JobApply from '../pages/JobApply'
import MyApplications from '../pages/MyApplications'
import AddJobForm from '../pages/AddJobFrom'
import MyPostedJob from '../pages/MyPostedJob'
import ViewApplication from '../pages/ViewApplication'
import Error from '../pages/Error'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    errorElement : <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/jobdetails/:id',
        hydrateFallbackElement : (
          <div className='flex min-h-screen justify-center items-center'>
            <span className='loading loading-spinner text-error'></span>
          </div>
        ),
        loader: ({ params }) =>
          fetch(
            `https://job-portal-app-server-hazel.vercel.app/jobs/${params.id}`
          ),
        element: <Jobdetails></Jobdetails>
      },
      {
        path: '/jobApply/:id',
        element: (
          <PrivateProvider>
            <JobApply></JobApply>
          </PrivateProvider>
        )
      },
      {
        path: '/myApplications',
        element: (
          <PrivateProvider>
            <MyApplications></MyApplications>
          </PrivateProvider>
        )
      },
      {
        path: '/addjob',
        element: (
          <PrivateProvider>
            <AddJobForm></AddJobForm>
          </PrivateProvider>
        )
      },
      {
        path: '/mypostedjobs',
        element: (
          <PrivateProvider>
            <MyPostedJob></MyPostedJob>
          </PrivateProvider>
        )
      },
      {
        path: '/totalApplications/:jobId',
        hydrateFallbackElement : (
          <div className='flex min-h-screen justify-center items-center'>
            <span className='loading loading-spinner text-error'></span>
          </div>
        ),
        loader: ({ params }) =>
          fetch(
            `https://job-portal-app-server-hazel.vercel.app/applications/job/${params.jobId}`
          ),
        element: (
          <PrivateProvider>
            <ViewApplication></ViewApplication>
          </PrivateProvider>
        )
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/signup',
        element: <Register></Register>
      },
      {
        path: '/auth/signin',
        element: <Login></Login>
      }
    ]
  }
])
