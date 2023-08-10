"use client";
import Image from 'next/image';
import Link from 'next/link'
import ThemeButton from './ThemeButton';
import MenuButton from './MenuButton';
import { useState } from 'react';
import CloseButton from './CloseButton';
import { AnimatePresence, motion } from 'framer-motion';




const Menu = ({className}:{className: string}) => {
  return (
    <ul className={className}>
              <Link href='#hero'>Home</Link>
              <Link href='#about'>About Me</Link>
              <Link href='#skills'>Skills</Link>
              <Link href='#projects'>Project</Link>
              <Link href='#contact'>Contact</Link>

            </ul>
  )
}

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
          <Menu className ='flex gap-4 font-bold text-dark-2 dark:text-light-d text-body-large items-center'/>
          </div>
          <ThemeButton />
          <div className='none max-md:block' onClick={() => {setIsOpened(!isOpened)}}>
            {isOpened? <></>:<MenuButton/>}
          </div>
        </div>

      </nav>
      <AnimatePresence>
        {isOpened && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed z-50 m-0 w-full h-full bg-light-trans dark:bg-dark-trans2 backdrop-blur-lg'
            onClick={() => {setIsOpened(!isOpened)}}
           >
              <div className='fixed top-2 right-2'>
                <CloseButton  />
              </div>
              <Menu className ='mt-72 flex top-3 flex-col gap-4 font-bold text-dark-2 dark:text-light-d text-body-large items-center'/>

          
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar