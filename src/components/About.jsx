import React from 'react'
import pic from '../assets/react.svg';
import Skills from './Skills';
import { useLocation } from 'react-router-dom';


const About = () => {
    const info = [
        { text: 'Completed Projects', count: '5' },
        { text: 'Certifications', count: '5' },
        { text: 'github repo', count: '24' },
    ]
    const location = useLocation();
    return (
        <>
            <section id='about' className='md:py-32 py-20 text-white border-y border-gray-700'>
                <div className="text-center">
                    <h3 className="text-4xl mb-10 font-bold">About <span className='text-blue-600'>Me</span></h3>
                    {/* <p className="text-gray-400 my-3 text-lg">My introduction</p> */}
                    <div className='flex md:flex-row flex-col-reverse md:gap-6 gap-10 px-16 max-w-6xl mx-auto'>
                        <div className='text-gray-400'>
                            <p className='text-center leading-5 md:leading-7 md:w-2/4  mx-auto'>
                                Passionate developer proficient in full-stack web development with a passion for crafting efficient and user-friendly solutions. Skilled in HTML, CSS, JavaScript, and various frameworks including React and Node.js. Dedicated to continuously learning and implementing innovative technologies to create impactful digital experiences.
                            </p>
                            <div className='flex my-20 items-center gap-7 justify-center'>
                                {
                                    info?.map((content) => (
                                        <div key={content.text}>
                                            <h3 className='md:text-4xl text-2xl font-semibold text-white'>{content.count}
                                                <span className='text-blue-6600'>+</span>
                                            </h3>
                                            <span className='md:text-base text-xs'>{content.text}</span>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        {/* <div className='flex-1 md:mt-0 mt-6 flex justify-center items-center'>
                        <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm pic">
                            <img src={pic} alt="" className='w-full object-cover bg-blue-500 rounded-xl'/>
                        </div>
                    </div> */}
                    </div>
                </div>
            </section>
            {location.pathname === '/' && <Skills />}
        </>
    )
}

export default About