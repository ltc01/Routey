import React from 'react'
import pic from '../assets/react.svg';
const HireMe = () => {
  return (
    <section id='hireme'className='text-white py-10 px-3'>
        <div className="text-center">
            <h3 className="text-4xl font-semibold">
            Hire <span className='text-blue-600'>Me</span>
            </h3>
            <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
        </div>
        <div className='bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-2xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center'>
            <div>
                <h2 className='text-2xl font-semibold'>Do you want any work from me?</h2>
                <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime possimus laudantium dolorem at tempore, consectetur, eos aperiam perspiciatis corrupti dignissimos commodi voluptatem quod. Laboriosam ipsa accusantium mollitia explicabo reiciendis vel.
                </p>
                <button className="btn-primary mt-10">Say Hello</button>
            </div>
            <img src={pic} alt="" 
            className='lg:h-[20rem] h-60 lg:relative bottom-0 -right-3 object-cover'
            />
        </div>
    </section>
  )
}

export default HireMe