import Lottie from 'lottie-react'
import React, { useContext } from 'react'
import register_animation from '../assets/lotties/register-anim.json'
import { FaGoogle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'

const Register = () => {
  const { setUser, handleRegister, handleRegisterGoogle } = useContext(AuthContext)
  const navigate = useNavigate();

  const handleSignup = e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value

    handleRegister(email, password)
      .then(userCredential => {
        const user = userCredential.user
        setUser(user)
        navigate('/')
        console.log(user)
      })
      .catch(error => {
        const errorCode = error.code
        console.log(errorCode)
      })
  }

  const handleSignupGoogle = () => {
    handleRegisterGoogle()
      .then(result => {
        setUser(result.user)
        navigate('/')
        console.log(result.user)
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  return (
    <div>
      <div className='hero bg-base-100 min-h-screen py-[30px]'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <Lottie
              animationData={register_animation}
              style={{ width: '300px' }}
              loop={true}
            ></Lottie>
          </div>
          <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
            <div className='card-body'>
              <form onSubmit={handleSignup} className='fieldset text-[16px]'>
                <h1 className='text-2xl text-center font-semibold'>
                  Register Now
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
                <button
                  type='submit'
                  className='btn btn-neutral mt-4 text-[16px]'
                >
                  Register
                </button>
                <button
                  onClick={handleSignupGoogle}
                  className='btn mt-1 text-[16px]'
                >
                  <FaGoogle></FaGoogle> Register With Google
                </button>
                <p className='text-[16px]'>
                  Already Have Account?{' '}
                  <Link to='/auth/signin' className='text-blue-500'>
                    login please
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

export default Register
