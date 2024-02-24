import React from 'react'

const Contact = () => {
    const contact_info=[
        {logo:'mail',text:"laxmichoudhary909@gmail.com"},
        {logo:'logo-WhatsApp',text:"809 706 2444"},
        {logo:'location',text:"Kamatghar,Bhiwandi,Thane, Maharashtra-421 305"},
    ]
  return (
    <section id='contact' className='py-10 px-3 text-white'>
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">
                    Contact <span className='text-blue-600'>Me</span>
                </h3>
                <p className="text-gray-400 my-3 text-lg">Get in touch</p>

                <div className='mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto'>

                    <form action="" className='flex flex-col flex-1 gap-5'>
                        <input type="text" name="" id="" placeholder='Your Name' />
                        <input type="email" name="" id="" placeholder='Your Email Address...' />
                        <textarea placeholder="Your Message" rows={10}></textarea>
                        <button className='btn-primary w-fit'>Send Message</button>

                    </form>
                    <div className='flex flex-col gap-7'>
                     {
                        contact_info.map((contact,i)=>(
                            <div key={i} className='flex gap-4 w-fit items-center'>
                              <div className='min-w-[3.5rem] min-h-[3.5rem] flex items-center justify-center text-white bg-blue-600  rounded-full text-3xl'>
                                <ion-icon name={contact.logo}></ion-icon>
                            </div>
                            <p className="text-base">{contact.text}</p>
                        </div>
                        ))
                     }
                       
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Contact