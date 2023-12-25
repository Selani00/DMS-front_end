import React, { useState, useEffect } from 'react'

import logo from '../assets/logo_us.png'
import { Link } from 'react-scroll';
import { FaXmark, FaBars } from "react-icons/fa6";




const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (Window.scrollY > 100) {

        setIsSticky(true);
      }
      else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.addEventListener('scroll', handleScroll);
    }
  })

  const navItems = [

    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "FQA", path: "fqa" },



  ]
  return (
    <div className='bg-secondary text-x1 container mx-auto  md:px-14 p-2 max-w-full'>
      <div className='flex justify-between items-center'>

        <div className='flex space-x-14 items-center pl-20'>
          <ul className='md:flex space-x-16 first:font-medium hidden'>
            {
              navItems.map(({ link, path }) => <a key={link} href={path} className='block hover:text-white'>{link}</a>)
            }
          </ul>
        </div>

        <div className='items-center'>
          
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-semibold text-black rounded-lg group 
          bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-1 focus:outline-none ">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-secondary dark:bg-secondary rounded-md group-hover:bg-opacity-0">
              Sign In
            </span>
          </button>
        </div>

        {/* menu button for small devices-mobile */}

        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-NeutralDGrey focus:outline-none focus:test-gray-500 '>
            {
              isMenuOpen ? (<FaXmark className='h-6 w-6 ' />) : (<FaBars className='h-6 w-6 ' />)
            }
          </button>

        </div>
      </div>
      {/* Items for mobile nav links */}
      <div className={`space-y-2 px-4 mt-4 mx-4 rounded-xl py-7 bg-secondary ${isMenuOpen ? "block fixed right-0 left-0" : "hidden"}`}>
        {
          navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-black 
                             hover:text-white first:font-medium'>{link}</Link>)
        }
      </div>


    </div>
  )
}

export default Navbar
