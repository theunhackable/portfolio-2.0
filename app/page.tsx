"use client"
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
    <TransitionEffect/>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      {/* <Footer /> */}
    </>
  )
}
