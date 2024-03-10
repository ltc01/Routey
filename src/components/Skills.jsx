import React from 'react'

const Skills = () => {
    const skills = [
        {
            logo: 'logo-html5',
            level: 'HTML5',
            text: 'text-red-400',
            count: 86,
        },
        {
            logo: 'logo-css3',
            level: 'CSS3',
            text: 'text-blue-400',
            count: 90,
        },
        {
            logo: 'logo-nodejs',
            level: 'Node.js',
            text: 'text-green-700',
            count: 40,
        },
        {
            logo: 'logo-react',
            level: 'React',
            text: 'text-blue-500',
            count: 50,
        },
        {
            logo: 'logo-javascript',
            level: 'Javascript',
            text: 'text-yellow-500',
            count: 68,
        },
        {
            logo: 'logo-python',
            level: 'python',
            text: 'text-green-500',
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
            className='pb-10 relative'
        >
            <div className='mt-8 px-10 text-gray-100 text-center'>
                <h3 className='text-4xl font-bold'>
                    Tech <span className="text-blue-600">Skills</span></h3>
                {/* <p className="text-gray-400 mt-3 text-lg">My knowledge</p> */}
                <div className="flex item-center px-2 lg:px-40 justify-center mt-12 gap-10 flex-wrap">
                    {
                        skills?.map((skill, i) => (
                            <div 
                            key={i}
                            className='border-2 hover:border-blue-700 hover:bg-gray-800 group relative min-w-[10rem] max-w-[16rem] border-blue-900 p-10 rounded-xl'>
                                <div style={{
                                    background: `conic-gradient(rgb(50, 100, 200) ${skill.count}%, #ddd ${skill.count}%)`,
                                }}
                                    className='w-20 h-20 flex items-center justify-center rounded-full'>
                                    <div className={`text-4xl ${skill.text} w-[4.3rem] h-[4.3rem] bg-gray-900 rounded-full flex items-center justify-center`}>
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
