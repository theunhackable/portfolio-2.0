import { useTheme } from 'next-themes';
import Image from 'next/image'
import React from 'react'

const CloseButton = () => {
  const {theme, setTheme} = useTheme(); 

  return (
    theme === "dark"?
    <Image src='/assets/icons/close_dark.svg' className='md:hidden' alt='menu' width={45} height={75}/>
    :
    <Image src='/assets/icons/close.svg' className='md:hidden' alt='menu' width={45} height={75}/>


  )
}

export default CloseButton