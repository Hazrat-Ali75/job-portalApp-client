import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, useLocation } from 'react-router'

const PrivateProvider = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) {
    return (
      <div className='flex min-h-screen justify-center items-center'>
        <span className='loading loading-spinner text-error'></span>
      </div>
    )
  }

  if (user && user.email) {
    return children
  }

  return <Navigate state={location.pathname} to='/auth/signin'></Navigate>
}

export default PrivateProvider
