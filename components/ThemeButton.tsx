import { useTheme } from 'next-themes'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const ThemeButton = () => {
  
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {

    const addTheme = () => {
      const userTheme = localStorage.getItem("theme");
      if(userTheme){
        setTheme(userTheme);
      }
      else{
        localStorage.setItem("theme", "light");
        setTheme("light");
      }
    }
    setMounted(true);
    addTheme();
    return () => { setMounted(false)};
    
  }, []);


  const handleThemeChange = () => {
    console.log('handlechange', theme)  
    if(theme){
        if(theme === "dark") {
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
        else {
          setTheme("dark");
            localStorage.setItem("theme", "dark");
        }
      }
      else{
        setTheme("light"); 
      }

  };

  if(!mounted) {
    return null
  }
  
  return (
        <div className='rounded-full p-1 bg-dark-2 dark:bg-light-a spin-once hover:cursor-pointer' onClick={handleThemeChange}>
            {
                theme === "light" ?
                (<Image width={35} height={35} src='/assets/icons/dark_mode.svg' alt="dark" priority/> ):
                (<Image width={35} height={35} src='/assets/icons/light_mode.svg' alt="light" priority/>)
            }
        </div> )
}

export default ThemeButton