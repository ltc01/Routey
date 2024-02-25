import React from 'react'

const Skills = () => {
    const skills = [
        {
            logo: 'logo-html5',
            level: 'Advance',
            count: 86,
        },
        {
            logo: 'logo-css3',
            level: 'Expert',
            count: 90,
        },
        {
            logo: 'logo-nodejs',
            level: 'Beginner',
            count: 40,
        },
        {
            logo: 'logo-react',
            level: 'Intermediate',
            count: 50,
        },
    ]
  return (
    <section
            id='skills'
            className='py-10 bg-gray-800 relative'
        >
            <div className='mt-8 text-gray-100 text-center'>
                <h3 className='text-4xl font-semibold'>
                    My <span className="text-blue-600">Skills</span></h3>
                <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
                <div className="flex item-center justify-center mt-12 gap-10 flex-wrap">
                    {
                        skills?.map((skill, i) => (
                            <div 
                            key={i}
                            className='border-2 group relative min-w-[10rem] max-w-[16rem] bg-gray-900 border-blue-600 p-10 rounded-xl'>
                                <div style={{
                                    background: `conic-gradient(rgb(8,100,180) ${skill.count}%, #ddd ${skill.count}%)`,
                                }}
                                    className='w-32 h-32 flex items-center justify-center rounded-full'>
                                    <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex group group-hover:text-blue-400 items-center justify-center">
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
