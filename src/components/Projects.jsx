import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import forex from '../assets/Forex.png';
import pin from '../assets/Pinterest.png';
import ip from '../assets/IPTracker.png';
import url from '../assets/url.png';
import pic from '../assets/pic.png';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Projects = () => {
    const projects = [
        {
            img: pin,
            name: "Pinterest clone",
            github_link: "https://github.com/ltc01/Pinterest_frontend.git",
            live_link: "https://pinterest-frontend-nine.vercel.app/"
        },
        {
            img: forex,
            name: "ForeXplore",
            github_link: "https://github.com/ltc01/ForeXplore.git",
            live_link: "https://fore-xplore.vercel.app/"
        },
        {
            img: pic,
            name: "Picture Gallery App",
            github_link: "https://github.com/ltc01/Picture-Gallery.git",
            live_link: "#"
        },
        {
            img: ip,
            name: "IP Tracker",
            github_link: "https://github.com/ltc01/IpTracker.git",
            live_link: "https://ip-tracker-ltc01.vercel.app/"
        },
        {
            img: url,
            name: "Shortly",
            github_link: "https://github.com/ltc01/UrlShortener.git",
            live_link: "https://url-shortener-ltc01.vercel.app/"
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
                <div className="w-[50%] mx-auto">
                    <Swiper
                        slidesperview={1.2}
                        spaceBetween={20}
                        breakpoints={{ 768: { slidesperview: 2, }, }}
                        loop={true}
                        autoplay={{ delay: 6000, }}
                        pagination={{ clickable: true, }}
                        modules={[Pagination, Autoplay]}
                    >
                        {
                            projects.map((project_info, i) => (
                                <SwiperSlide key={i}>
                                    <div className="h-fit md:w-full p-8 text-white bg-gray-800 rounded-xl overflow-hidden">
                                        <img src={project_info.img} alt="" className="w-full object-cover object-top" />
                                        <h3 className="text-xl md:text-2xl my-2 font-semibold">{project_info.name}</h3>
                                        <div className="flex justify-center gap-6 my-5">
                                            <a 
                                            href={project_info.github_link} 
                                            target="_blank" rel='noreferrer'
                                            className='border hover:bg-blue-900 border-blue-600 rounded-full px-5 py-1 inline-block'>Github</a>
                                            <a 
                                            href={project_info.live_link} 
                                            target='_blank' rel='noreferrer'
                                            className='border hover:bg-blue-900 border-blue-600 rounded-full px-5 py-1 inline-block'>Live Demo</a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div >
                <div className="lg:block hidden ">
                    <img src={"#"} alt="" />
                </div>

            </div>
        </section>
  )
}

export default Projects