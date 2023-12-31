import { useTheme } from 'next-themes'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const skills = [
  {
    skill: 'HTML',
    img: 'html.svg',
    dark_img: 'html.svg'
  },
  {
    skill: 'CSS',
    img: 'css.svg',
    dark_img: 'css.svg',
  },
  {
    skill: 'Tailwind CSS',
    img: 'tailwind.svg',
    dark_img: 'tailwind.svg',
  },
  {
    skill: 'JavaScript',
    img: 'javascript.svg',
    dark_img: 'javascript.svg',

  },
  {
    skill: 'Mongo DB',
    img: 'mongo.svg',
    dark_img: 'mongo.svg',

  },
  {
    skill: 'Express Js',
    img: 'express.svg',
    dark_img: 'express_dark.svg',

  },
  {
    skill: 'React Js',
    img: 'react.svg',
    dark_img:'react.svg'
  },
  {
    skill: 'Node Js',
    img: 'node.svg',
    dark_img: 'node.svg',

  },
  {
    skill: 'TypeScript',
    img: 'typescript.svg',
    dark_img: 'typescript.svg',

  },
  {
    skill: 'Next Js',
    img: 'nextjs.svg',
    dark_img: 'next_dark.svg',

  },
  {
    skill: 'Github',
    img: 'github.svg',
    dark_img: 'github_dark.svg',

  },
]

const SkillCard=({skill, img}:{skill:string, img: string}) =>(
  <div id="skill-container" className='flex flex-col justify-center
  items-center dark:text-white text-body-medium max-md:text-body-normal font-semibold'>
  <Image src={`/assets/icons/${img}`} alt={skill} height={100} width={100} className='max-md:w-[75px]' priority={img.includes('dark')}/>
  <p className='mt-2'>
    {skill}
  </p>
</div> 
)
const Skills = () => {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  })
  if(!mounted) return null;
  return (
    <section id="skills">
      <h1 className="heading text-center mb-16">
        <span className='text-black dark:text-white'> Skills.</span>
      </h1>
      <div id="skills-wrapper" className='flex flex-wrap justify-center max-md:justify-evenly gap-16 max-md:gap-12 max-sm:gap-8'>  
        {skills.map(item => <SkillCard key={item.skill} skill={item.skill} img={theme ==="dark"? item.dark_img: item.img}/>) }
      </div>
    </section>
  )
}

export default Skills