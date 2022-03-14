import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { useState } from 'react'
import Image from 'next/image';
import List from './List';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleclick = () => setNav(!nav);
  return (
    <div className="w-full fixed flex justify-between items-center h-[80px] bg-[#0a192f] text-gray-300 px-4">
      <Image src="/static/logo.png" width="40px" height="40px" alt="logo" className="" />
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

      <ul className={nav ? 'hidden' : ' flex justify-between h-screen items-center absolute left-0 top-0 bg-[#0a192f] text-gray-300 w-full flex-col p-28 md:hidden'}>
          <li className='text-4xl py-6'>Home</li>
          <li className='text-4xl py-6'>About</li>
          <li className='text-4xl py-6'>Skills</li>
          <li className='text-4xl py-6'>Projects</li>
          <li className='text-4xl py-6'>Contact</li>
         </ul>
    
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col left-0 top-[35%] w-40'>
        <ul>
          <List color="bg-blue-400" text="Linkedin" icon={<FaLinkedin size={30} />} />
          <List color="bg-slate-600" text="Github" icon={<FaGithub size={30} />} />
          <List color="bg-green-600" text="Email" icon={<HiOutlineMail size={30} />} />
          <List color="bg-indigo-800" text="Resume" icon={<BsFillPersonLinesFill size={30}/>} />
          
          
    
        </ul>
      </div>
      </div>
    
  )
}
// -ml-[100px] hover:-ml-[10px]

export default Navbar