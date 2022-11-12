import React from 'react'
import { Outlet } from 'react-router-dom'
import useScrollToTop from '../../hooks/useScrollToTop'


import Footer from '../Footer'
import Header from '../Header'

const Layout = () => {
  useScrollToTop()
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout