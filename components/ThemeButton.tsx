"use client"
import { useTheme } from 'next-themes'
import Image from 'next/image';
import React, { useEffect } from 'react'

const ThemeButton = () => {
  
  const {theme, setTheme} = useTheme();
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
    addTheme();
    
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
  
  return (
        <div className='rounded-full p-1 bg-dark-2 dark:bg-light-a' onClick={handleThemeChange}>
            {
                theme === "light" ?
                (<Image width={35} height={35} src='/assets/icons/dark_mode.svg' alt="dark"/>):
                (<Image width={35} height={35} src='/assets/icons/light_mode.svg' alt="light"/>)
            }
        </div> )
}

export default ThemeButton