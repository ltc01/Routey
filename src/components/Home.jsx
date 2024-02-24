import React from 'react'
import pic from '../assets/react.svg';

const Home = () => {
    const social_media = [
        'logo-instagram',
        'logo-facebook',
        'logo-linkedin',
        'logo-twitter',
      ]
  return (
    <section 
  id='home'
  className='min-h-screen flex py-10 md:flex-row flex-col items-center'
  >
    <div className="flex-1 flex items-center justify-center h-full">
      <img src={pic} alt="" className='md:w-11/12 h-full object-cover' />
    </div>
    <div className="flex-1">
      <div className='md:text-left text-center'>
        <h1 className='text-2xl font-bold text-white leading-10 md:text-5xl md:leading-normal'>
          <span className='text-blue-500 md:text-6xl text-5xl'>
            Hello!
            <br />
          </span>
          My Name is <span>Laxmi Chaudhary</span>
        </h1>
        <h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600'>Web Developer</h4>
        <button className='btn-primary mt-8'>Contact me</button>
        <div className='mt-8 text-3xl flex items-center md:justify-start justify-center gap-5'>
          {
            social_media?.map((icon)=>(
              <div key={icon} className='text-gray-600 hover:text-white cursor-pointer'>
                <ion-icon name={icon}></ion-icon>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </section>
 
  )
}

export default Home