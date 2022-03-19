
const List = ({text,icon,color,src}) => {
  return (
    <li className=' h-16 flex justify-between lg:-ml-32 lg:hover:-ml-[10px] items-center mdm:scale-100 text-gray-300 mdm:hover:text-pink-500 mdm:duration-75 lg:duration-300 mdm:w-52 mdm:hover:text-lg'>
            
      <div className={`${color} absolute mdm:relative  w-full  h-16 filter blur opacity-80 z-0 mdm:blur-sm mdm:rounded-2xl`}></div>
          <a className='flex fixed justify-between items-center w-40   z-10 p-2' href={src} target="_blank" rel="noreferrer">
               {text} {icon}
          </a>
    </li>
  )
}

export default List