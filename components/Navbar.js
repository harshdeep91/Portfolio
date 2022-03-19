import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { useState } from 'react'
import Image from 'next/image';
import List from './List';
import {Link} from 'react-scroll'
const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleclick = () => setNav(!nav);
  return (
    <div className="w-full flex justify-between items-center h-[80px] bg-[#0a192f] text-gray-300 px-4
    sticky left-0 top-0 z-40">
      <Image src="/static/logo.png" width="40px" height="40px" alt="logo" className="" />
      <div>
        <ul className="hidden md:flex justify-between">
          <li>
            <Link to="homepage" smooth={true} duration={500}>
             Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
             About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
             Skills
            </Link>
          </li>
          <li>
            <Link to="works" smooth={true} duration={500}>
             Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
             Contact
            </Link>
          </li>
         </ul>
      </div>
      {/* Hamburger */}
      <div onClick={handleclick} className='md:hidden  cursor-pointer z-50'>
        {nav ?<FaBars className='w-9 h-9' />:<FaTimes className='w-9 h-9'/>}
      </div>
      {/* Mobile Menu */}
      
      <ul className={nav ? 'hidden' : ' flex justify-between h-screen items-center left-0 top-0 fixed bg-[#0a192f] text-gray-300 w-full flex-col p-28 md:hidden'}>
        <li className='text-4xl py-6'>
        <Link onClick={handleclick} to="homepage" smooth={true} duration={500}>
             Home
            </Link>
        </li>
        <li className='text-4xl py-6'>
        <Link onClick={handleclick} to="about" smooth={true} duration={500}>
             About
            </Link>
        </li>
        <li className='text-4xl py-6'>
        <Link onClick={handleclick} to="skills" smooth={true} duration={500}>
             Skills
            </Link>
        </li>
        <li className='text-4xl py-6'>
        <Link onClick={handleclick} to="works" smooth={true} duration={500}>
             Projects
            </Link>
        </li>
        <li className='text-4xl py-6'>
        <Link onClick={handleclick} to="contact" smooth={true} duration={500}>
             Contact
            </Link>
          </li>
         </ul>
    
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col left-0 top-[35%] w-40'>
        <ul>
          <List color="bg-blue-400" text="Linkedin" icon={<FaLinkedin size={30} />} src="https://www.linkedin.com/in/harshdeep-raghuwanshi-4954b51a4/"/>
          <List color="bg-slate-600" text="Github" icon={<FaGithub size={30} />} src="https://github.com/harshdeep91"/>
          <List color="bg-green-600" text="Email" icon={<HiOutlineMail size={30} />} src="mailto:harshdeepraghuwanshi91@gmail.com"/>
          <List color="bg-indigo-800" text="Resume" icon={<BsFillPersonLinesFill size={30}/> } src="https://drive.google.com/file/d/1A4GqQqfJ3-rjWVRRC0L3P7dRv4pSQhiC/view?usp=sharing" />
          
          
    
        </ul>
      </div>
      </div>
    
  )
}
// -ml-[100px] hover:-ml-[10px]

export default Navbar