import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { IoMdMoon } from 'react-icons/io'
import { IoSunny } from 'react-icons/io5'

const ThemeSwitch = () => {
    const {systemTheme , theme, setTheme} = useTheme ();
    const [mounted, setMounted] = useState(false);

    useEffect(() =>{
      setMounted(true);
    },[])

  const renderThemeChanger= () => {
        if(!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme ;

        if(currentTheme ==="dark"){
          return (
            <IoSunny className='text-[23px] dark:text-white text-dark mr-[15px] cursor-pointer' onClick={() => setTheme('light')}/>
          )
        }

        else {
          return (
            <IoMdMoon className='text-[23px] dark:text-white text-dark mr-[15px] cursor-pointer' onClick={() => setTheme('dark')}/>   
          )
        }
     };

     return renderThemeChanger()
}

export default ThemeSwitch