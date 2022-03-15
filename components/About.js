
const About = () => {
  return (
      <div name='about' className="w-full h-screen bg-[#0a192f] text-gray-300">
          <div className='w-full flex flex-col justify-center h-full 
          items-center'>
              <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                  <div className="sm:text-right pb-8 pl-4">
                      <p className="text-4xl font-bold border-b-4 inline border-pink-600">About</p>
                  </div>
              </div>
              <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                  <div>
                      <p className="text-4xl font-bold sm:text-right">Hi I'm Harshdeep, nice to meet you there.Please take a look around.</p>
                  </div>
                  <div>
                      <p>
                          Im passionate frontend developer always eager to learn new things. Im a cse undergraduate and i have sufficient experience to build a good front end website.call i am always there for you.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default About