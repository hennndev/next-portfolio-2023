import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoMenu, IoClose } from 'react-icons/io5'
import ThemeSwitch from './ThemeSwitch'

const Navbar = () => {
    const router = useRouter()
    const [showSidebar, setShowSidebar] = useState(false)

    const handleSide = () => {
        setShowSidebar(false)
    }

    const pathname = router.pathname.split('/')[1]

    return (
        <header className="w-full px-[20px] py-[10px] sticky top-0 dark:bg-gray-900/50 bg-white/50 backdrop-blur-[7px] z-10 duration-300 ease-in">
            <div className="container flex_between dark:text-white text-dark font-poppins">
                <h2 className='text-2xl font-bold'>Hennndev</h2>
                <ul className={`fixed flex-col w-full h-screen justify-center dark:bg-gray-900 bg-white top-0 ${showSidebar ? 'left-0' : 'left-[-100%]'} right-0 bottom-0 transition-all duration-300 ease-in sm:transition-none sm:h-0 sm:static sm:flex-row flexx`}>
                    <li className={`${pathname === '' ? 'text-primary' : ''} text-[20px] mb-[20px] sm:text-[17px] sm:mb-0 sm:mr-[17px] hover:text-primary duration-300 ease-in`}>
                        <Link href="/" onClick={handleSide}>Home</Link>
                    </li>
                    <li className={`${pathname === 'projects' ? 'text-primary' : ''} text-[20px] mb-[20px] sm:text-[17px] sm:mb-0 sm:mr-[17px] hover:text-primary duration-300 ease-in`}>
                        <Link href="/projects" onClick={handleSide}>All Projects</Link>
                    </li>
                    <li className={`${pathname === 'about' ? 'text-primary' : ''} text-[20px] mb-[20px] sm:text-[17px] sm:mb-0 sm:mr-[17px] hover:text-primary duration-300 ease-in`}>
                        <Link href="/about" onClick={handleSide}>About</Link>
                    </li>
                </ul>
                <div className="flexx">
                    <ThemeSwitch/>
                    {!showSidebar ? (
                        <IoMenu className='text-[23px] dark:text-white text-dark block md:hidden cursor-pointer' onClick={() => setShowSidebar(true)}/>
                    ) : (
                        <IoClose className='text-[23px] text-red-400 block md:hidden cursor-pointer z-20' onClick={() => setShowSidebar(false)}/>
                    )}
                </div>
            </div>
        </header>
    )
}


export default Navbar