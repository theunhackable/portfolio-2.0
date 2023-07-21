import { useTheme } from 'next-themes';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  const {theme, setTheme} = useTheme();
  return (
    <section className='p-16 flex flex-col justify-center items-center'>
      <h1 className="heading text-center mb-16"> <span className='text-black dark:text-white'>Contact </span>Info.</h1>

      <ul className="flex my-16 gap-16 items-center justify-center">
        
        <Link href='/'>
          <Image src='/assets/icons/twitter.svg' alt='twitter' width={75} height={50}/>
        </Link>
        <Link href='/'>
          <Image src='/assets/icons/linkedin.svg' alt='twitter' width={75} height={50}/>
        </Link>
        <Link href='/'>
          <Image src={`/assets/icons/github${theme === "dark"? "_dark": ""}.svg`} alt='twitter' width={75} height={50}/>
        </Link>

      </ul>

      <Link href='mailto:srirangasaipagala@gmail.com' className='font-bold text-body-large text-dark-5 dark:text-light-a underline'>
        srirangasaipagala@gmail.com
      </Link>

    </section>
  )
}

export default Contact