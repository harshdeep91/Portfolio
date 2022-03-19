import List from "./List"
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
const Connect = () => {
  return (
      <div className="bg-[#0a192f] w-full p-4 lg:hidden flex flex-col text-gray-300 justify-center items-center ">
          <p className="mb-5 text-4xl ">Lets Connect</p>
          
          <ul className='relative bottom-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8'>
          <List color="bg-blue-700" text="Linkedin" icon={<FaLinkedin size={30} />} src="https://www.linkedin.com/in/harshdeep-raghuwanshi-4954b51a4/"/>
          <List color="bg-slate-700" text="Github" icon={<FaGithub size={30} />} src="https://github.com/harshdeep91"/>
          <List color="bg-green-700" text="Email" icon={<HiOutlineMail size={30} />} src="mailto:harshdeepraghuwanshi91@gmail.com"/>
          <List color="bg-indigo-800" text="Resume" icon={<BsFillPersonLinesFill size={30}/> } src="https://drive.google.com/file/d/1A4GqQqfJ3-rjWVRRC0L3P7dRv4pSQhiC/view?usp=sharing" />
        </ul>
    
      </div>
  )
}

export default Connect