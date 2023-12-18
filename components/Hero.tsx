import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const Hero = () => {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  })
  if(!mounted) return null;
  return (
    <section id='hero'>
        <div className="flex justify-evenly items-center gap-16 max-lg:gap-8 max-md:flex-col-reverse max-md:text-center">
          <div>
            <motion.h1 
                initial={{ opacity: 0,  x: 50}}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay:1, duration: 0.5 }}
            className='heading'>
            Hi! I am <span className='text-black dark:text-white'>Sri Ranga Sai</span>,<br/> a <span className='text-black dark:text-white'>Full Stack Web<br/> Developer</span>
            </motion.h1>
            <div className='mt-16'>

              <ul className="flex flex-wrap gap-16 max-lg:gap-8 justify-center items-center">
                <Link target="__blank" href='https://twitter.com/SriRangaSaiP'>
                  <Image src='/assets/icons/twitter.svg' alt='twitter' width={50} height={50} className='max-xl:w-[45px]'/>
                </Link>
                <Link target="__blank" href='https://www.linkedin.com/in/srsp1116'>
                  <Image src='/assets/icons/linkedin.svg' alt='twitter' width={50} height={50} className='max-xl:w-[45px] '/>
                </Link>
                <Link target="__blank" href='https://github.com/theunhackable'>
                  <Image src={`/assets/icons/github${theme === "dark"? "_dark": ""}.svg`} alt='twitter' width={50} height={50} className='max-xl:w-[45px]'/>
                </Link>
                <Link target="__blank" href='/Sri Ranga Sai Pagala dec.pdf'>
                  <div className='flex gap-2 bg-dark-2 dark:bg-light-e text-white dark:text-dark-2 px-8 max-xl:px-4 py-2 rounded-2xl justify-center items-center hover:bg-dark-blue dark:hover:bg-light-blue'>
                    <p className='text-body-large hover:underline font-semibold max-xl:text-body-medium'>Resume</p>
                    <Image className='float' src={`/assets/icons/open_in_new${theme === "dark"? "_dark": ""}.svg`} alt='open' width={25} height={25} priority/>
                  </div>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            <Image src={`/assets/images/hero3.png`} alt='hero image' width={400} height={400} className='max-xl:w-[375px] max-lg:w-[325px] max-sm:w-[275px]'
            priority/>
          </div>
        </div>
    </section>
  )
}

export default Hero