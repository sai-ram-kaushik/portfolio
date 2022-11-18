import React, { useEffect } from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import Aos from "aos";
import 'aos/dist/aos.css';
const Projects = () => {

  useEffect(() =>{
    Aos.init({duration: 1000});
  }, []);

  return (
    <section id='projects' className='py-10 relative'>
      <div className='mt-8 text-gray-100 text-center'>
        <h3 className='text-4xl font-semibold ' data-aos="fade-right">
          My <span className='text-cyan-600'>Projects</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg' data-aos="fade-right">My awesome works</p>
        <div className=' flex justify-center mt-12'>
          <div className='w-[30%] flex flex-wrap md:item-center justify-center' data-aos="fade-up">
            <ul>
              <li className='relative flex gap-6 pb-5 items-baseline'>
                <div className='before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400'>
                  <svg xmlns='http://wwww.w3.org/2000/svg' width="12" height="12" className='bi bi-circle fill-gray-400'>
                    <circle cx="5" cy="5" r='10' />
                  </svg>
                </div>
                <div className='text-lg text-gray-400'>
                  <p className='text-3xl font-sans font-bold text-white'>AICCIT - 2023</p>
                  <p className='mt-2 flex items-baseline'><AiOutlineArrowRight className='w-16 mt-2'/>A Website made with Reactjs and Tailwind CSS 
                </p>
                <p className='mt-2 flex items-baseline'><AiOutlineArrowRight className='w-16 mt-2'/>A Website for a college conference which will be integrated in our college official website
                </p>
                <p className='mt-2 flex items-baseline'><AiOutlineArrowRight className='w-16 mt-2'/>Check out the website -<span className='text-blue-500'><a href="https://aiccit2023.vercel.app/" target="_blank">Link</a></span></p>
                </div>
              </li>

              <li className='relative flex gap-6 pb-5 items-baseline'>
                <div className='before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400'>
                  <svg xmlns='http://wwww.w3.org/2000/svg' width="12" height="12" className='bi bi-circle fill-gray-400'>
                    <circle cx="5" cy="5" r='10' />
                  </svg>
                </div>
                <div className='text-lg text-gray-400'>
                  <p className='text-3xl font-sans font-bold text-white'>Weather Application</p>
                  <p className='mt-2 flex items-baseline'><AiOutlineArrowRight className='w-16'/>A website made with Reactjs, Tailwind CSS and Weather API</p>
                  <p className='mt-2 flex items-baseline'><AiOutlineArrowRight className='w-16'/>A platform where we can check the weather status of any country</p>
                  <p className='mt-2 flex items-baseline'><AiOutlineArrowRight className='w-16'/>Check out the website - <span className='text-blue-500'><a href='https://weather-pi-khaki.vercel.app/'target="_blank">Link</a></span></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects