import Image from 'next/image';
const Work = ({ LandImage, title, demo, code }) => {  
  return (
      <div className="shadow-lg shadow-[#040c16] group container rounded-2xl flex justify-center items-center mx-auto h-64 hover:bg-gradient-to-r from-indigo-700 to-blue-900 duration-500 relative ">
          
          {/* Hover Effect */}
          <div className='z-10 opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                {title}
                </span>
                <div className="pt-8 text-center">
                    <a className='bg-white text-gray-700 rounded-lg font-bold text-lg m-2 px-4 py-3' href={demo} >
                        <button>Demo</button>
                    </a>
                    <a className='bg-white text-gray-700 rounded-lg font-bold text-lg m-2 px-4 py-3' href={code}>
                      <button>Code</button>
                    </a>
                </div>
          </div>
          <Image src={LandImage} alt="HTML icon" layout='fill' objectFit='cover' className='group-hover:opacity-20 rounded-2xl'/>
      </div>
  )
}

export default Work