"use client"
import { useTheme } from 'next-themes';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  const {theme, setTheme} = useTheme();
  return (
    <section id='contact'>
      <h1 className="heading text-center mb-16 max-sm:mb-4"> <span className='text-black dark:text-white'>Contact </span>Info.</h1>

      <ul className="flex my-16 max-sm:my-8 gap-16 items-center justify-center max-sm:gap-8">
        
        <Link href='/'>
          <Image src='/assets/icons/twitter.svg' alt='twitter' width={75} height={50} className='max-sm:w-[50px]'/>
        </Link>
        <Link href='/'>
          <Image src='/assets/icons/linkedin.svg' alt='twitter' width={75} height={50}className='max-sm:w-[50px]'/>
        </Link>
        <Link href='/'>
          <Image src={`/assets/icons/github${theme === "dark"? "_dark": ""}.svg`} alt='twitter' width={75} height={50} className='max-sm:w-[50px]'/>
        </Link>

      </ul>

      <Link href='mailto:srirangasaipagala@gmail.com' className='text-center font-bold text-body-large max-md:text-body-medium text-dark-5 dark:text-light-a underline'>
        srirangasaipagala@gmail.com
      </Link>

    </section>
  )
}

export default Contact