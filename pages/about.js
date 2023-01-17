import Head from "next/head"
import { IoDownload, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'

const About = () => {

    const routeGithub = () => {
        window.open('https://github.com/hennndev', '_blank', 'noreferrer')
    }

    return (
        <>
            <Head>
                <title>About Me</title>
            </Head>
            <section className="container pt-[70px] dark:text-white text-dark font-poppins px-[15px] text-center">
                <h1 className='text-[30px] font-bold mb-[30px]'>About Me</h1>
                <p className="mt-[30px] sm:px-[100px] leading-relaxed"><span className="font-bold text-[18px]">My Name is Hendra</span>, and I'm a Web Developer, IOS Developer, UI/UX Designer and more about technology jobs. I have 5 years experience as a freelancer. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis est pariatur soluta accusantium veritatis a voluptate debitis earum libero suscipit aliquam exercitationem deserunt voluptas, natus repellendus quidem cupiditate dolorum? Eveniet fugiat quae asperiores quisquam id perferendis? Reprehenderit placeat, rerum voluptate maxime illum nobis nam possimus ipsam natus quod unde sit.</p>
                <div className="flex_center mt-[15px]">
                    <IoLogoGithub className="text-[25px] mr-[15px] cursor-pointer" onClick={routeGithub}/>
                    <IoLogoLinkedin className="text-[25px] mr-[15px] cursor-pointer"/>
                    <IoLogoInstagram className="text-[25px] cursor-pointer"/>
                </div>
                <div className="flex_center">
                    <button className="btn btn_primary mt-[20px] flexx">
                        <IoDownload className="text-[22px] mr-[7px]"/>
                        Download CV
                    </button>
                </div>
            </section>
        </>
    )
}

export default About