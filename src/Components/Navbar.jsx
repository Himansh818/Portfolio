import React from 'react'
import '../ComponentsCss/Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar px-10 rounded-2xl fixed bg-linear-to-t from-blue-600 to-black h-10 w-fit flex justify-center items-center text-white gap-10'>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
    </div>
  )
}

export default Navbar
