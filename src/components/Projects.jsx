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
            name: "Movie App",
            github_link: "#",
            live_link: "#"
        },
        {
            img: pic,
            name: "React App",
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
            name: "CityLight App",
            github_link: "#",
            live_link: "#"
        },
    ]
  return (
    <section id='projects'
            className='py-10 text-white'>
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className='text-blue-600'>Projects</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
            </div>
            <br />
            <div className="flex max-w-6xl px-5 mx-auto items-center relative">
                <div className="lg:w-2/3 w-full">
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
                                    <div className="h-fit w-10/12 md:w-full p-4 bg-slate-700 rounded-xl">
                                        <img src={project_info.img} alt="" className="rounded-lg" />
                                        <h3 className="text-xl my-4">{project_info.name}</h3>
                                        <div className="flex gap-3">
                                            <a 
                                            href={project_info.github_link} 
                                            target="_blank" rel='noreferrer'
                                            className='text-blue-600 bg-gray-800 px-2 py-1 inline-block'>Github</a>
                                            <a 
                                            href={project_info.live_link} 
                                            target='_blank' rel='noreferrer'
                                            className='text-blue-600 bg-gray-800 px-2 py-1 inline-block'>Live Demo</a>
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