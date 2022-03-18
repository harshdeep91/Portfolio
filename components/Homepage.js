import { HiArrowNarrowRight } from 'react-icons/hi'
const Homepage = () => {
  return (
    <div name="homepage" className="w-full h-screen bg-[#0a192f] absolute z-0">
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi,my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-gray-300'>Harshdeep Raghuwanshi</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'>I&apos;m a Frontend Developer</h2>
        <p className='text-gray-400 max-w-3xl'>I can design your website to a new level .Currently im focused on buiding a responsive website.I am using React as main javascript framework </p>
      <div>
          <button className=' group text-white border-2 px-6 py-4 my-3 flex items-center space-x-2 hover:bg-pink-600 hover:border-red-600'>
            <span>View Projects</span>
            <span className=' group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight  />
              </span>
          </button>
          
      </div>
      </div>
    </div>
  )
}

export default Homepage