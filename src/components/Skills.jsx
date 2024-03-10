import React from 'react'

const Skills = () => {
    const skills = [
        {
            logo: 'logo-html5',
            level: 'HTML5',
            text: 'text-orange-500',
            count: 86,
        },
        {
            logo: 'logo-css3',
            level: 'CSS3',
            text: 'text-sky-400',
            count: 90,
        },
        {
            logo: 'logo-nodejs',
            level: 'Node.js',
            text: 'text-green-600',
            count: 40,
        },
        {
            logo: 'logo-react',
            level: 'React',
            text: 'text-sky-500',
            count: 50,
        },
        {
            logo: 'logo-javascript',
            level: 'Javascript',
            text: 'text-yellow-400',
            count: 68,
        },
        {
            logo: 'logo-python',
            level: 'python',
            text: 'text-white',
            count: 60,
        },
        {
            logo: 'logo-github',
            level: 'Github',
            text: 'text-white',
            count: 40,
        },
    ]
  return (
    <section
            id='skills'
            className='md:py-32 py-20 relative border-y border-gray-700'
        >
            <div className='mt-8 px-10 text-gray-100 text-center'>
                <h3 className='text-4xl font-bold'>
                    Tech <span className="text-blue-600">Skills</span></h3>
                {/* <p className="text-gray-400 mt-3 text-lg">My knowledge</p> */}
                <div className="flex item-center px-2 pb-20 lg:px-40 justify-center mt-12 gap-12 flex-wrap">
                    {
                        skills?.map((skill, i) => (
                            <div 
                            key={i}
                            className='border-2 hover:border-blue-700 transition ease-in-out delay-150 duration-200 hover:-translate-y-1 hover:scale-110 hover:bg-gray-800 group relative min-w-[10rem] max-w-[16rem] border-blue-900 p-10 rounded-xl'>
                                <div style={{
                                    background: `conic-gradient(rgb(30, 70, 210) ${skill.count}%, #ddd ${skill.count}%)`,
                                }}
                                    className='w-24 h-24 flex items-center justify-center rounded-full'>
                                    <div className={`text-5xl ${skill.text} w-[5.2rem] h-[5.2rem] bg-gray-900 rounded-full flex items-center justify-center`}>
                                        <ion-icon name={skill.logo}></ion-icon>
                                    </div>
                                </div>
                                <p className='text-xl font-semibold mt-3'>{skill.level}</p>

                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
  )
}

export default Skills
