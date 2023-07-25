import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section id="about">
      <div className="flex flex-col justify-center gap-16 items-center">
        <h1 className="heading text-center">
          The <span className='text-black dark:text-white'>choices</span> you make today<br/>
          will be your <span className='text-black dark:text-white'>biography</span> tomorrow.
        </h1>
        <div id="about-wrapper" className='flex justify-center gap-16 items-center p-4 max-md:p-0 max-md:flex-col'>

          <div id="about-image w-1/2">
            <Image src='/assets/images/about_image.png' alt='about image' height={400} width={375} className='max-xl:w-[300px] max-sm:w-[275px]'/>
          </div>
        <div id='about-content' className='w-1/2 text-dark-5 dark:text-light-b text-body-medium max-xl:text-body-normal font-bold max-md:w-[90%] max-sm:w-[95%]'>
          <p className='mb-16 max-lg:mb-8'>
            Hi! my full name is <span className='text-black dark:text-white'>Sri Ranga Sai Pagala</span>. I’m a small town boy with big dreams. Since from my childhood I am very passionate about computers and I always wonder how they work. 
          </p>
          <p className='mb-16 max-lg:mb-8'>
            I used to sit and play all kinds of 90’s games in my  uncle’s internet cafe which increased curiosity about how this computer works. Later I discovered about internet through which people can communicate across continents and from space too. 
          </p>
          <p className=''>
            This passion led me to choose <span className='text-black dark:text-white'>Information Technology</span> as a graduation degree. I completed my graduation in 2022. After that I took an year break to explore more about other professions and the world. After my break I decided to become a web developer and present I’m working on it ...
          </p>
        </div>
        </div>
      </div>
    </section>
  )
}

export default About