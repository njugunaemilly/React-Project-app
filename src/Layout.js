import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'

function Layout() {
  return (
    <div>
        <Navbar/>
            <div className='container p-4 min-vh-100'>
                <Outlet/>
                <Home/>
            </div>
        <Footer/>
    </div>
  )
}

export default Layout