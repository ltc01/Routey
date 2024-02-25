import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import pic from '../assets/react.svg';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Projects = () => {
    const projects = [
        {
            img: pic,
            name: "Pinterest clone",
            github_link: "#",
            live_link: "#"
        },
        {
            img: pic,
            name: "ForeXplore",
            github_link: "#",
            live_link: "#"
        },
        {
            img: pic,
            name: "Picture Gallery App",
            github_link: "#",
            live_link: "#"
        },
        {
            img: pic,
            name: "IP Tracker",
            github_link: "#",
            live_link: "#"
        },
        {
            img: pic,
            name: "Shortly",
            github_link: "#",
            live_link: "#"
        },
    ]
  return (
    <section id='projects'
            className='py-20 text-white'>
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className='text-blue-600'>Projects</span>
                </h3>
                {/* <p className="text-gray-400 mt-3 text-lg">My awesome works</p> */}
            </div>
            <br />
            <div className="flex max-w-6xl justify-evenly px-5 mx-auto items-center relative">
                <div className="lg:w-1/2 w-full">
                    <Swiper
                        slidesperview={1.2}
                        spaceBetween={20}
                        breakpoints={{ 768: { slidesperview: 2, }, }}
                        loop={true}
                        autoplay={{ delay: 3000, }}
                        pagination={{ clickable: true, }}
                        modules={[Pagination, Autoplay]}
                    >
                        {
                            projects.map((project_info, i) => (
                                <SwiperSlide key={i}>
                                    <div className="h-fit md:w-full py-10 px-8 text-white bg-black rounded-xl overflow-hidden">
                                        <img src={project_info.img} alt="" className="w-full h-60 object-contain" />
                                        <h3 className="text-xl text-center md:text-2xl my-8 font-semibold">{project_info.name}</h3>
                                        <div className="flex justify-center gap-6 my-5">
                                            <a 
                                            href={project_info.github_link} 
                                            target="_blank" rel='noreferrer'
                                            className='border-2 hover:bg-blue-900 rounded-xl border-blue-600 px-5 py-2 inline-block'>Github</a>
                                            <a 
                                            href={project_info.live_link} 
                                            target='_blank' rel='noreferrer'
                                            className='border-2 hover:bg-blue-900 border-blue-600 rounded-xl px-5 py-2 inline-block'>Live Demo</a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div >
                <div className="lg:block hidden ">
                    <img src={pic} alt="" />
                </div>

            </div>
        </section>
  )
}

export default Projects