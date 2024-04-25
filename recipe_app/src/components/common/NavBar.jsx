import React from 'react'
import { Link } from 'react-router-dom'
import { CgMenuRight } from "react-icons/cg";

const NavBar = () => {
  return (
    <nav className=' max-w-[1180px] w-full m-auto px-3 py-4 flex items-center justify-between'>
      <div className='logo'><Link to={'/'}><h3 className='text-xl font-semibold text-[#1434A4]'>Recipe Finder</h3></Link></div>
      <ul className='flex items-center gap-5'>
        <li><Link to={'/'} className='text-[18px] hover:text-[#1434A4] duration-300'>Home</Link></li>
        <li><Link to={'/about'} className='text-[18px] hover:text-[#1434A4] duration-300'>About Us</Link></li>
        <li><Link to={'/recipes'} className='text-[18px] hover:text-[#1434A4] duration-300'>Recipes</Link></li>
        <li><Link to={'/contact'} className='text-[18px] hover:text-[#1434A4] duration-300'>Contact Us</Link></li>
      </ul>
      <div className='flex items-center gap-4'>
        <Link to={'/contact'} className='bg-[#1434A4] text-white px-4 py-3 rounded font-semibold'>Subscribe</Link>
         <CgMenuRight className='text-4xl md:hidden block'/>
        </div>
    </nav>
  )
}

export default NavBar