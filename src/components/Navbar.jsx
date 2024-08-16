import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { RiCloseFill } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <>
    { isMenuOpen && <MobileNavbar isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} 

    <div className='mt-5 w-screen hidden md:flex items-center justify-center fixed '>
      <nav className='border rounded-lg ax-w-screen-xl max-auto py-3 px-6 backdrop-filter backdrop-blur-md dark:border-zinc-600'> 
        <ul className='flex items-center gap-14 mx-5'>
          <li className='hover:text-slate-950 '>
            <Link to= "page-id" smooth spy offset={-80} className='menu-item dark:text-white dark:hover:text-white/80' >
              Home
            </Link>
          </li>
          <li className='hover:text-slate-950'>
            <Link to= "name-and-about" smooth spy offset={-80} className='menu-item dark:text-white dark:hover:text-white/80' >
              About Me
            </Link>
          </li>
          <li className='hover:text-slate-950'>
            <Link to= "experience" smooth spy offset={-80} className='menu-item dark:text-white dark:hover:text-white/80' >
              Experience
            </Link>
          </li>
          <li className='hover:text-slate-950'>
            <Link to= "skills" smooth spy offset={-80} className='menu-item dark:text-white dark:hover:text-white/80' >
              Skills
            </Link>
          </li>
          <li className='hover:text-slate-950'>
            <Link to= "contact" smooth spy offset={-80} className='menu-item dark:text-white dark:hover:text-white/80' >
              Contacts
            </Link>
          </li>
          <div className='cursor-pointer dark:invert'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </div>
          
        </ul>
      </nav>
    </div>
    <div className='p-3 fixed top-0 right-0'>
        <button onClick={toggleMenu} className='flex items-center justify-center md:hidden z-50 ml-auto text-slate-950'>
          {isMenuOpen ? <RiCloseFill /> : <CgMenuMotion />}
        </button>
      </div>
    </>
  )
}

export default Navbar