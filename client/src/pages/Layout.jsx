import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/dashboard/Navbar'

const Layout = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-slate-700 via-slate-500 to-slate-700 text-white">
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout