import Image from 'next/image';
import Link from 'next/link'
import ThemeButton from './ThemeButton';

const Navbar = () => {
  
  return (
    <nav className='fixed flex items-center justify-between px-16 pt-1 w-full  backdrop-blur-lg'>
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
        <ThemeButton />

      </div>
    </nav>
  )
}

export default Navbar