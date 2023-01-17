import React from 'react'
import Image from 'next/image'

const FeaturedProjects = ({projects}) => {

    const handleLink = (linkURL) => {
        if(typeof window !== 'undefined') {
            window.open(linkURL, '_blank', 'noreferrer')
        }
    }

    return (
        <section className='container pt-[150px] dark:text-white text-dark font-poppins'>
            <h1 className='text-[30px] sm:text-[40px] font-bold mb-[50px] text-center'>Featured Projects</h1>
            <div className='flex_center flex-wrap gap-[30px]'>
                {projects.map(project => (
                    <div className='flex flex-col w-[300px] h-[400px] shadow-md mb-[20px] rounded-[6px] overflow-hidden hover:transform hover:translate-y-[-5px] duration-500 ease-in-out' key={project.title}>
                        <div className='relative h-[220px]'>
                            <Image 
                                src={project.img}
                                fill
                                alt={project.title}/>
                        </div>
                        <div className='flex-1 py-[20px] dark:text-dark dark:bg-gray-100 px-[15px]'>
                            <p className='mb-[5px]'>{project.title}</p>
                            <p className='mb-[5px]'>{project.description}</p>
                            <button className="btn" onClick={() => handleLink(project.link)}>View Project</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeaturedProjects