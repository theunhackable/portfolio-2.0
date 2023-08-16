
import { useTheme } from 'next-themes';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const MenuButton = () => {
  const {theme, setTheme} = useTheme(); 
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  })
  if(!mounted) return null;

  return (
    theme === "dark"?
    <Image src='/assets/icons/menu_dark.svg' className='md:hidden' alt='menu' width={45} height={75} priority/>
    :
    <Image src='/assets/icons/menu.svg' className='md:hidden' alt='menu' width={45} height={75} priority/>


  )
}

export default MenuButton