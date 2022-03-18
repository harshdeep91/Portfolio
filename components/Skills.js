import css from '../public/static/css.png';
import javascript from '../public/static/javascript.png';
import nextjs from '../public/static/nextjs.png';
import react from '../public/static/react.png';
import tailwind from '../public/static/tailwind.png';
import html from '../public/static/html.png';
import Skill from './Skill';
// import firebase from '../public/static/firebase.png';

const Skills = () => {
  return (
      <div name='skills' className='bg-[#0a192f] w-full h-screen'>
           <div className='max-w-[1000px] flex flex-col justify-center h-full 
          items-center mx-auto text-gray-300'>
              <div>
                  <p className=' text-4xl border-b-4 border-pink-600 inline'>Skills</p>
                  <p className='py-4'>&#8427; These are the technologies i am currently working on</p>
              </div>
              <div className='grid w-full grid-cols-2 sm:grid-cols-3 py-8 text-center gap-4'>
                  <Skill image={html} text="HTML" />
                  <Skill image={css} text="CSS" />
                  <Skill image={javascript} text="Javascript" />
                  <Skill image={nextjs} text="NextJs" />
                  <Skill image={react} text="React" />
                  <Skill image={tailwind} text="TailwindCss"/>
              </div>
          </div>
       </div>
      
  )
}

export default Skills