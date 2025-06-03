import Lottie from 'lottie-react'
import React, { useContext } from 'react'
import login_anim from '../assets/lotties/login-anim.json'
import { Link, useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'
const Login = () => {
  const { setUser, handleLogin } = useContext(AuthContext)
  const navigate = useNavigate()
  const {state} = useLocation();
  console.log(state)

  const handleSignin = e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value

    handleLogin(email, password)
      .then(result => {
        setUser(result.user)
        navigate(`${state ? state : '/'}`)
        console.log(result.user)
      })
      .catch(error => {
        console.log(error.message)
      })
  }
  
  return (
    <div>
      <div className='hero bg-base-200 min-h-screen py-[30px]'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <Lottie
              animationData={login_anim}
              loop={true}
              style={{ width: '500px' }}
            ></Lottie>
          </div>
          <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
            <div className='card-body'>
              <form onSubmit={handleSignin} className='fieldset text-[16px]'>
                <h1 className='text-2xl text-center font-semibold'>
                  Login Now
                </h1>
                <label className='label'>Email</label>
                <input
                  type='email'
                  name='email'
                  className='input'
                  placeholder='Email'
                />
                <label className='label'>Password</label>
                <input
                  type='password'
                  className='input'
                  name='password'
                  placeholder='Password'
                />
                <div>
                  <a className='link link-hover'>Forgot password?</a>
                </div>
                <button
                  type='submit'
                  className='btn btn-neutral mt-4 text-[16px]'
                >
                  Login
                </button>
                <p>
                  Haven't an Account?{' '}
                  <Link to='/auth/signup' className='text-blue-500'>
                    register now
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
