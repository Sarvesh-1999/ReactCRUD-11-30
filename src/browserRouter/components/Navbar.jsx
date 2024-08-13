import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
      <li><Link to="/">Register</Link></li>
      <li><Link to="/loginuser">Login</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
