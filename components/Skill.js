import Image from 'next/image';
const Skill = ({image,text}) => {
  return (
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
    <Image src={image} alt="HTML icon" width="80px" height="80px" />
          <p className='my-4'>{text}</p>
   </div>
  )
}

export default Skill