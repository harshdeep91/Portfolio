import {HiArrowNarrowRight} from 'react-icons/hi'
const Homepage = () => {
  return (
    <div name="homepage" className="w-full h-screen bg-[#0a192f]">
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-gray-300'>
        <p className=''>Hi,my name is</p>
        <h1>Harshdeep Raghuwanshi</h1>
        <h2>I'm a Frontend Developer</h2>
        <p>I can designed your website to a new level.Currently im focused on buiding a responsive website.I am using React as main javascript framework </p>
      <div>
        <button>View Projects<HiArrowNarrowRight/></button>
      </div>
      </div>
    </div>
  )
}

export default Homepage