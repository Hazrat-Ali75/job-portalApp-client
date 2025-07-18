import React from 'react'
import Navbar from '../shared/Navbar'
import { Outlet } from 'react-router'
import Footer from '../shared/Footer'

const AuthLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default AuthLayout
