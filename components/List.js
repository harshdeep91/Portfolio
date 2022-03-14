
const List = ({text,icon,color}) => {
  return (
    <li className=' h-16 flex justify-between -ml-32 hover:-ml-[10px] items-center  duration-300 '>
            
      <div className={`${color} absolute w-full h-16 filter blur opacity-80 z-0`}></div>
          <a className='flex fixed justify-between items-center w-40 text-gray-300 z-10 p-2' src="/">
               {text} {icon}
          </a>
    </li>
  )
}

export default List