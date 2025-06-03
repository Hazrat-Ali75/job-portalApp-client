import React, { useContext } from 'react'
import { MdMenu } from 'react-icons/md'
import { Link, NavLink, useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSignout = () =>{
    handleLogout()
    .then(()=>{
      navigate('/')
    })
    .catch(error=>{
      console.log(error)
    })
  }

  const links = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      {
        user && <li>
        <NavLink to='/myApplications'>My Applications</NavLink>
      </li>
      }
      {
        user && <li>
        <NavLink to='/addjob'>Post Job</NavLink>
      </li>
      }
      {
        user && <li>
        <NavLink to='/mypostedjobs'>My Posted Job</NavLink>
      </li>
      }
    </>
  )
  return (
    <div className='navbar bg-base-100 shadow-sm'>
      <div className='navbar-start'>
        <div className='dropdown flex items-center gap-2 justify-center'>
          <div tabIndex={0} role='button' className='pl-4 btn btn-ghost'>
            <MdMenu size={23}></MdMenu>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-[130px] ml-4 w-52 p-2 shadow'
          >
            {links}
          </ul>
          <div>
            <h3 className='text-2xl font-semibold'>
              Chakri<span>Khuji</span>
            </h3>
          </div>
        </div>
      </div>
      <div className='navbar-center'>
        <ul className='flex items-center gap-4'>{links}</ul>
      </div>
      <div className='navbar-end pr-3 gap-2'>
        {user ? (
          <button
            onClick={handleSignout}
            className='btn bg-gray-600 text-white rounded-4xl font-medium text-[17px]'
          >
            Logout
          </button>
        ) : (
          <Link to='/auth/signin'>
            <button className='btn bg-blue-400 text-white rounded-4xl font-medium text-[17px]'>
              Login
            </button>
          </Link>
        )}
        {!user ? (
          <Link to='/auth/signup'>
            <button className='btn bg-gray-700 text-white rounded-4xl font-medium text-[17px]'>
              Register
            </button>
          </Link>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Navbar
