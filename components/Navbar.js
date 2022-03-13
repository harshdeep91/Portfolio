import {FaBars,FaTimes} from 'react-icons/fa'
import { useState } from 'react'
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleclick = () => setNav(!nav);
  return (
    <div className="w-full fixed flex justify-between items-center h-[80px] bg-[#0a192f] text-gray-300 px-4">
      <img src="/static/logo.png" alt="logo" className="w-10 h-10" />
      <div>
        <ul className="hidden md:flex justify-between">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
         </ul>
      </div>
      {/* Hamburger */}
      <div onClick={handleclick} className='md:hidden z-10  cursor-pointer '>
        {nav ?<FaBars className='w-9 h-9' />:<FaTimes className='w-9 h-9'/>}
      </div>
      {/* Mobile Menu */}
      
      <ul className={nav ? 'hidden' : ' flex justify-between h-screen items-center absolute left-0 top-0 bg-[#0a192f] text-gray-300 w-full flex-col p-28'}>
          <li className='text-4xl py-6'>Home</li>
          <li className='text-4xl py-6'>About</li>
          <li className='text-4xl py-6'>Skills</li>
          <li className='text-4xl py-6'>Projects</li>
          <li className='text-4xl py-6'>Contact</li>
         </ul>
   
      {/* Social icons */}
      <div className='hidden'>

      </div>
      </div>
    
  )
}

export default Navbar