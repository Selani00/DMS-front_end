import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [user,setUser]=useState();


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (Window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    

  setUser(localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null);
    
   

  window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const logout = () => {
    localStorage.removeItem('user');
    window.location.href = "/"
  }

  const navItems = [
    { link: "Home", path: "/" },
    { link: "Contacts", path: "/Contact" },
    { link: "Plan", path: "about" },
    { link: "News", path: "/News" },
    { link: "Donations", path: "/Donations" },
  ];


  return (
    <div className="bg-primary text-x1 container mx-auto  md:px-14 p-1 max-w-full">
      <div className="flex justify-between items-center">
        <div className="flex space-x-14 items-center pl-20">
          <ul className="md:flex space-x-16 first:font-medium hidden text-white">
            {navItems.map(({ link, path }) => (
              <a key={link} href={path} className="block hover:text-yellow-200">
                {link}
              </a>
            ))}
          </ul>
        </div>

        <div className="items-center">
          {!user? 
          <RouterLink to="/Login">
           
          <button className="relative inline-flex items-center justify-center px-2 overflow-hidden text-base font-semibold text-white rounded-lg border-white border-2">
            <span class="relative px-5 py-1.5 transition duration-300 hover:scale-125 ">
              
              Sign In
            </span>
          </button>
        </RouterLink>
          :     
          <button className="relative inline-flex items-center justify-center px-2 overflow-hidden text-base font-semibold text-white rounded-lg border-white border-2" onClick={logout}>
            <span class="relative px-5 py-1.5 transition duration-300 hover:scale-125 ">             
              log out
            </span>
          </button>
       
          }
          
        </div>

        {/* menu button for small devices-mobile */}

        <div className="md:hidden ">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:test-gray-500 "
          >
            {isMenuOpen ? (
              <FaXmark className="h-6 w-6 " />
            ) : (
              <FaBars className="h-6 w-6 " />
            )}
          </button>
        </div>
      </div>
      {/* Items for mobile nav links */}
      <div
        className={`space-y-2 px-4 mt-4 mx-4 rounded-xl py-7 bg-secondary ${
          isMenuOpen ? "block fixed right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <Link
            to={path}
            spy={true}
            smooth={true}
            offset={-100}
            key={path}
            className="block text-black 
                             hover:text-white first:font-medium"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
