"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const projects = [
  {
    heading: 'CarHub',
    image: 'car-showroom.png',
    desc: `CarHub is a place where you search for cars.`,
    tags:['NextJs', 'TailwindCSS', 'TypeScript'],
    live: 'https://cars-showroom-one.vercel.app/',
    github: 'https://github.com/theunhackable/cars-showroom/'
  },
  {
    heading: 'promptopia',
    image: 'promptopia.png',
    desc: `Promptopia is a full stack nextjs project that is useful to create edit and use AI prompts. Sign In with your google account and get started ...`,
    tags:['Next Js', 'TailwindCSS'],
    live: 'https://promptopia-two-dun.vercel.app/',
    github: 'https://github.com/theunhackable/promptopia'
  },
  {
    heading: 'GPT-3 Landing Page',
    image: 'gpt3.png',
    desc: `Landing page of GPT-3, build using React.Js. This web page is responsive and mobile friendly. Used CSS3 for styling. Deployed to GitHub Pages using gh-pages tool.`,
    tags:['React Js'],
    live: 'https://theunhackable.github.io/gpt3-landing-page/',
    github: 'https://github.com/theunhackable/gpt3-landing-page'
  },
  {
    heading: 'Markdown Viewer',
    image: 'markdown-viewer.png',
    desc: `This is a webpage which preview markdown text.`,
    tags:['ReactJs'],
    live: 'https://theunhackable.github.io/markdown-previewer/',
    github: 'https://github.com/theunhackable/markdown-previewer'
  },
  {
    heading: 'Random Quote Generator',
    image: 'random-quote-generator.png',
    desc: `load random quotes on click of a button and share it on twitter...`,
    tags:['ReactJs'],
    live: 'https://theunhackable.github.io/random-quote-machine/',
    github: 'https://github.com/theunhackable/random-quote-machine'
  }
];

const ProjectCard = ({heading, image, tags, live, github}: {heading: string, image: string, tags: string[], live: string, github: string}) => {
  return (
    <div className="project-container">
          <div className="project-image  border-2 border-dark-5 dark:border-white rounded-xl">
            <Image className='rounded-xl' src={`/assets/projects/${image}`} alt={heading} width={600} height={300} priority />
          </div>
          <div className="project-content pt-4">
            <h1 className="text-h-5 max-lg:text-h-6 max-md:text-body-large font-semibold">
              {heading}
            </h1>
            <div className="flex gap-4 text-body-medium max-md:text-body-normal underline font-bold">
              <Link target='__blank' href={github}>
                GitHub
              </Link>
              <Link target='__blank' href={live}>
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
        {projects.map(project => <ProjectCard key={project.heading} heading={project.heading} image={project.image} tags={project.tags} live={project.live} github={project.github}/>)}
      </div>
      <h1 className='mt-3 text-h-6 text-center max-md:text-body-medium'>Can I call this website as my project? 😅 ...</h1>
    </section>
  )
}

export default Projects