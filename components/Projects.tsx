"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const projects = [
  {
    heading: 'promptopia',
    image: 'promptopia.png',
    desc: `Promptopia is a full stack nextjs project that is useful to create edit and use AI prompts. Sign In with your google account and get started ...`,
    tags:['Next Js', 'Vercel']
  },
  {
    heading: 'GPT-3 Landing Page',
    image: 'gpt3.png',
    desc: `Landing page of GPT-3, build using React.Js. This web page is responsive and mobile friendly. Used CSS3 for styling. Deployed to GitHub Pages using gh-pages tool.`,
    tags:['React Js', 'Github Pages']
  },
  {
    heading: 'Cryptor',
    image: 'cryptor.png',
    desc: `This website is used to encrypt and decrypt text files.`,
    tags:['HTML', 'CSS', 'Flask(Python3)']
  }
  
];

const ProjectCard = ({heading, image, tags}: {heading: string, image: string, tags: string[]}) => {
  return (
    <div className="project-container">
          <div className="project-image border-white border-[1px] rounded-2xl">
            <Image className='rounded-2xl' src={`/assets/projects/${image}`} alt={heading} width={600} height={300}/>
          </div>
          <div className="project-content pt-4">
            <h1 className="text-h-5 max-lg:text-h-6 max-md:text-body-large font-semibold">
              {heading}
            </h1>
            <div className="flex gap-4 text-body-medium  underline font-bold">
              <Link href='/'>
                GitHub
              </Link>
              <Link href='/'>
                Live
              </Link>
            </div>
            <div className="flex flex-wrap mt-4 gap-4 max-lg:text-body-normal font-extrabold text-dark-blue dark:text-light-blue">
              {tags.map(tag => <p key={tag}>{tag}</p> )}
            </div>
          </div>
        </div>
  )
}
const Projects = () => {
  return (
    <section id="projects">
      
      <h1 className="heading text-center">
        Talking is <span className='text-black dark:text-white'>cheap</span>. <br/>
        Show me the <span className='text-black dark:text-white'>code</span>.
      </h1>
      <p className='text-center text-body-large max-sm:text-body-normal font-extrabold text-dark-5 dark:text-light-b ml-96 max-md:ml-24 max-sm:ml-32 mb-16'> — Linus Torvalds.</p>

      <div className="flex flex-wrap justify-center p-16 max-md:p-4 gap-16">
        {projects.map(project => <ProjectCard key={project.heading} heading={project.heading} image={project.image} tags={project.tags}/>)}
      </div>
    </section>
  )
}

export default Projects