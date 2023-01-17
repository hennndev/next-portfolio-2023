import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Home/Hero'
import FeaturedProjects from '../components/Home/FeaturedProjects'
import projects from '../data_dummies/projects.json'


const Home = () => {
    
    return (
        <>
            <Head>
                <title>Homepage</title>
            </Head>
            <main>
                <Hero/>
                <FeaturedProjects projects={projects.slice(0, 3)}/>
            </main>
        </>
    )
}



export default Home