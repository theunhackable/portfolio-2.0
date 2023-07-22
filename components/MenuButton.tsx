import { useTheme } from 'next-themes';
import Image from 'next/image'
import React from 'react'

const MenuButton = () => {
  const {theme, setTheme} = useTheme(); 

  return (
    theme === "dark"?
    <Image src='/assets/icons/menu_dark.svg' className='md:hidden' alt='menu' width={45} height={75}/>
    :
    <Image src='/assets/icons/menu.svg' className='md:hidden' alt='menu' width={45} height={75}/>


  )
}

export default MenuButton