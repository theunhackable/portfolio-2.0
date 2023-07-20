import Image from 'next/image'
import React from 'react'
const skills = [
  {
    skill: 'HTML',
    img: 'html.svg',
  },
  {
    skill: 'CSS',
    img: 'css.svg',
  },
  {
    skill: 'Tailwind CSS',
    img: 'tailwind.svg',
  },
  {
    skill: 'JavaScript',
    img: 'javascript.svg',
  },
  {
    skill: 'Mongo DB',
    img: 'mongo.svg',
  },
  {
    skill: 'Express Js',
    img: 'express.svg',
  },
  {
    skill: 'React Js',
    img: 'react.svg',
  },
  {
    skill: 'Node Js',
    img: 'node.svg',
  },
  {
    skill: 'TypeScript',
    img: 'typescript.svg',
  },
  {
    skill: 'Next Js',
    img: 'nextjs.svg',
  },
  {
    skill: 'Github',
    img: 'github.svg',
  },
]
const SkillCard=({skill, img}:{skill:string, img: string}) =>(
  <div id="skill-container" className='flex flex-col justify-center
  items-center dark:text-white text-body-medium font-semibold'>
  <Image src={`/assets/icons/${img}`} alt={skill} height={100} width={100}/>
  <p className='mt-2'>
    {skill}
  </p>
</div> 
)
const Skills = () => {
  return (
    <section className='flex flex-col justify-center items-center p-16'>
      <h1 className="heading text-center mb-16">
        <span className='text-black dark:text-white'> Skills.</span>
      </h1>
      <div id="skills-wrapper" className='flex flex-wrap justify-center gap-16'>  
      {/*grid grid-cols-4 gap-16*/}
        {skills.map(item => <SkillCard key={item.skill} skill={item.skill} img={item.img}/>) }

      </div>
    </section>
  )
}

export default Skills