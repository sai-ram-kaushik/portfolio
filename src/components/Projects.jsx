import React from 'react'
import {Swiper, SwiperSlide} from 'swiper'

const Projects = () => {
  return (
    <section id='projects' className='py-10 relative'>
        <div className='mt-8 text-gray-100 text-center'>
        <h3 className='text-4xl font-semibold '>
                My <span className='text-cyan-600'>Projects</span>
            </h3>
            <p className='text-gray-400 mt-3 text-lg'>My awesome works</p> 
        </div>
        <br />
        <div className='flex max-w-6xl px-5 mx-auto items-center relative '>
            <div className='lg:w-2/3 w-full'>
                <Swiper slidesPreview={1.2} spaceBetween={20} breakpoints={{

                }}>
                    <SwiperSlide>
                        <div className='h-fit w-full p-4 bg-slate-700 rounded-xl'>
                            {/* <img src={} alt="" className='rounded-lg '/> */}
                            <h3 className='text-xl my-4 '>DropCount</h3>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Projects