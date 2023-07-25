"use client";
import Image from 'next/image';
import Link from 'next/link'
import ThemeButton from './ThemeButton';
import MenuButton from './MenuButton';
import { useState } from 'react';
import CloseButton from './CloseButton';

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const handleChange = () => {

  }
  return (
    <>
      <nav className='z-10 fixed flex items-center justify-between px-16 pt-1 w-full top-0  backdrop-blur-lg max-lg:px-8 max-sm:px-2'>
        <div>
          <Image width={50} height={50} src='/assets/images/logo.png' alt="logo"/>
        </div>
        <div className='flex items-center gap-8'>
          
          <div className='p-0 max-md:hidden'>
            <ul className='flex gap-4 font-bold text-dark-2 dark:text-light-d text-body-large items-center'>
              <Link href='#home'>Home</Link>
              <Link href='#about'>About Me</Link>
              <Link href='#projects'>Project</Link>
              <Link href='#contact'>Contact</Link>
            </ul>
          </div>
        </div>

        <div>
        <ThemeButton />
          <div className='none max-md:block' onClick={() => {setIsOpened(!isOpened)}}>
            {isOpened? <CloseButton /> :<MenuButton/>}
          </div>
        </div>


      </nav>
      {isOpened ? <ul className='mt-[72px] p-4 w-1/2 md:hidden flex flex-col fixed right-0 gap-8 font-extrabold text-dark-2 backdrop-blur-xl dark:text-light-e text-body-large items-center'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About Me</Link>
        <Link href='/projects'>Project</Link>
        <Link href='/contact'>Contact</Link>
      </ul>: <></>}

    </>
  )
}

export default Navbar