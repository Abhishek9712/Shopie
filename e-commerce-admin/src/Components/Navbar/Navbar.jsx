import React from 'react'
import './Navbar.css'
import navlogo from '../Assets/Admin_Logo.png'
import navprofileIcon from '../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} className='nav-logo' alt="" />
      <h3>Admin Shoppy Panel</h3>
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
