import React from 'react'
import pic from '../assets/react.svg';

const About = () => {
    const info = [
       
        { text: 'Completed Projects', count: '24' },
        
    ]
  return (
    <section id='about' className='py-10 text-white'>
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">
                    About <span className='text-blue-600'>Me</span>
                </h3>
                <p className="text-gray-400 my-3 text-lg">My introduction</p>
                <div className='flex md:flex-row flex-col-reverse md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
                    <div className='p-2'>
                        <div className='text-gray-300 my-3'>
                            <p className='text-justify leading-7 w-11/12 mx-auto'>
                            Passionate developer proficient in full-stack web development with a passion for crafting efficient and user-friendly solutions. Skilled in HTML, CSS, JavaScript, and various frameworks including React and Node.js. Dedicated to continuously learning and implementing innovative technologies to create impactful digital experiences.
                            </p>
                            <div className='flex mt-10 items-center gap-7 justify-center'>
                                {
                                    info?.map((content) => (
                                        <div key={content.text}>
                                            <h3 className='md:text-4xl text-2xl font-semibold text-white'>{content.count}
                                                <span className='text-blue-6600'>+</span>{" "}
                                            </h3>
                                            <span className='md:text-base text-xs'>{content.text}</span>
                                        </div>
                                    ))}
                            </div>
                            <br />
                            <br />
                            <a href='./src/assets/resume.pdf' className='flex items-center justify-center' download>
                                <button className="btn-primary">
                                    Download CV
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='flex-1 md:mt-0 mt-6 flex justify-center items-center'>
                        <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm pic">
                            <img src={pic} alt="" className='w-full object-cover bg-blue-500 rounded-xl'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default About