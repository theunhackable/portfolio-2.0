"use client";
import Image from 'next/image';
import Link from 'next/link'
import React, { ReactEventHandler, useState } from 'react'

const Navbar = () => {
  const [isHome, setIsHome] = useState(true);
  const [isProject, setIsProject] = useState(false);
  const [isContact, setIsContact] = useState(false);

  const handleHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log('home is clicked');
    console.log('home', isHome)
    setIsHome(true );
    setIsProject(false);
    setIsContact(false );

  }

  const handleProject = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log('home is clicked');
    console.log('home', isHome)
    setIsHome(false );
    setIsProject(true);
    setIsContact(false );

  }
  const handleContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log('home is clicked');
    console.log('home', isHome)
    setIsHome(false );
    setIsProject(false);
    setIsContact(true );

  }
  return (
    <nav className='fixed flex items-center justify-between px-16 pt-1 w-full bg-dark-trans backdrop-blur-lg'>
      <div>
        <Image width={50} height={50} src='/assets/images/logo.png' alt="logo"/>
      </div>
      <div className='flex items-center gap-8'>
        
        <div>
          <ul className='flex gap-4 font-bold text-dark-2 dark:text-light-d text-body-large items-center'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About Me</Link>
            <Link href='/projects'>Project</Link>
            <Link href='/contact'>Contact</Link>
          </ul>
        </div>

        <div className='rounded-full p-1 bg-black'>
          <Image width={35} height={35} src='/assets/icons/dark_mode.svg' alt="dark/light"/>
        </div>

      </div>
    </nav>
  )
}

export default Navbar