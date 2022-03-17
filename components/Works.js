import arr from '../public/Data'
import Work from './Work';
const Works = () => {
  return (
      <div name='works' className="bg-[#0a192f] w-full md:h-screen text-gray-300">
          <div className="max-w-[1000px] mx-auto justify-center w-full h-full flex flex-col p-4">
              <div>
                  <p className="text-4xl font-bold inline border-b-4 border-red-600">Projects</p>
                  <p className="py-6">//Check out my Projects</p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {arr.map(data =>  <Work LandImage={data.LandImage} title={data.title} code={data.code} demo={data.demo} />)}
                  
              </div>
          </div>
      </div>
  )
}

export default Works
 {/* */ }