
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  const {theme, setTheme} = useTheme();
  return (
    <section className='flex flex-col justify-center'>
        <div className="flex m-4 justify-evenly items-center gap-16">
          <div>
            <h1 className='heading'>
            Hi! I am <span className='text-black dark:text-white'>Sri Ranga Sai</span>,<br/> a <span className='text-black dark:text-white'>Full Stack Web<br/> Developer</span>
            </h1>
            <div className='mt-16'>

              <ul className="flex gap-16 items-center">
                <Link href='/'>
                  <Image src='/assets/icons/twitter.svg' alt='twitter' width={50} height={50}/>
                </Link>
                <Link href='/'>
                  <Image src='/assets/icons/linkedin.svg' alt='twitter' width={50} height={50}/>
                </Link>
                <Link href='/'>
                  <Image src={`/assets/icons/github${theme === "dark"? "_dark": ""}.svg`} alt='twitter' width={50} height={50}/>
                </Link>
                <Link href='/'>
                  <div className='flex gap-2 bg-dark-2 dark:bg-light-e text-white dark:text-dark-2 px-8 py-2 rounded-2xl justify-center items-center hover:bg-dark-blue dark:hover:bg-light-blue'>
                    <h6 className='text-body-large font-semibold'>Resume</h6>
                    <Image className='float' src={`/assets/icons/open_in_new${theme === "dark"? "_dark": ""}.svg`} alt='open' width={25} height={25}/>
                  </div>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            <Image src={`/assets/images/hero_image${theme === "dark"? "_dark": ""}.png`} alt='hero image'width={400} height={400}/>
          </div>
        </div>
    </section>
  )
}

export default Hero