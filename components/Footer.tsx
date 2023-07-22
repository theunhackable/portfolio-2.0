import React from 'react'

const Footer = () => {
  return (
    <footer className='px-16 py-2 bg-white dark:bg-light-a max-md:px-2'>
      <div className="flex justify-between items-center text-dark-5 dark:text-black font-extrabold max-md:flex-col  max-md:text-body-small">
        <p className='max-md:mb-2'>2023 © All rights reserved</p>
        <p className='max-md:mb-2'>Built with ♡ by Sri Ranga Sai Pagala</p>
        <p>Powered by Vercel, NextJS</p>
      </div>
    </footer>
  )
}

export default Footer