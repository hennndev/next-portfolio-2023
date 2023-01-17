import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import projects from '../../data_dummies/projects.json'
import FiltersStack from '../../components/Projects/FiltersStack'

const ProjectStack = () => {

    const router = useRouter()
    const handleLink = (linkURL) => {
        if(typeof window !== 'undefined') {
            window.open(linkURL, '_blank', 'noreferrer')
        }
    }
    const queries = router.query

    const projectsFilter = projects.filter(project => project.description.toLowerCase().includes(queries.stack))
    
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <section className='container pt-[70px] dark:text-white text-dark font-poppins px-[15px]'>
                <h1 className='text-[30px] text-center font-bold mb-[30px]'>My Projects</h1>
                {/* FILTERS STACK */}
                <FiltersStack/>
                <div className='flex_center flex-wrap gap-[30px]'>
                {projectsFilter.length > 0 ? projectsFilter.map(project => (
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
                )) : (
                    <div className='text-center'>
                        <h1 className='dark:text-white text-dark'>Projects with specific stack is not available.</h1>
                    </div>
                )}
            </div>
            </section>
        </>
    )
}

export default ProjectStack