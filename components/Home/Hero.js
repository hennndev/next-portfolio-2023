import Typed from 'react-typed';
import { BiChevronsDown } from 'react-icons/bi'

const Hero = () => {

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo(0, window.innerHeight + 50)
        }
    }

    return (
        <section className='container flex items-center h-[90vh] dark:text-white text-dark flex-col pt-[100px] sm:pt-[50px] px-[20px]'>
            <h1 className='text-[40px] font-bold sm:text-[65px] sm:font-extrabold text-center mb-[30px] leading-snug'>
                Start Your Digital Business <br /> with Me. <br /> 
                I'm a <Typed
                strings={[
                    'Web Developer',
                    'UI/UX',
                    '3D Model',
                    'IOS Developer']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                    className='text-primary text-[33px] sm:text-[65px] font-black'/>
            </h1>
            <button className="btn text-[20px]">Get Started</button>
            <div className="flex_center">
                <BiChevronsDown className='absolute bottom-0 text-5xl dark:text-[#eee] animate-bounce text-center cursor-pointer' onClick={handleScroll}/>
            </div>
        </section>
    )
}

export default Hero