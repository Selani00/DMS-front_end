import React from 'react'
import logo from '../assets/logo_main.png'
import { TERipple } from 'tw-elements-react';

const Navbar = () => {
    const navItems = [
        { link: "Home", path: "home" },
        { link: "Emergency Contacts", path: "contacts" },
        { link: "Emergency Plans", path: "emergencyPlans" },
        { link: "News", path: "news" },
    ]
    return (
        <nav className='md:px-0 p-0 max-w-screen-2xl mx-auto'>
            <div>
                {/*Language div */}
                <div className='bg-primary flex justify-between items-center p-2 container md:px-10  max-w-screen-2x1 mx-auto'>
                    <div className='bg-grey rounded-lg  py-0'>
                        <button className=' text-sm rounded-lg hover:bg-black hover:text-white px-4  m-0'>සිංහල</button>
                        <button className=' text-sm rounded-lg hover:bg-black hover:text-white px-4  m-0'>English</button>
                        <button className=' text-sm rounded-lg hover:bg-black hover:text-white px-4  m-0'>தமிழ்</button>
                    </div>
                    <div className='text-white'>Call Center 1717</div>

                </div>

                {/* <!--Search div--> */}
                <div className='text-lg container flex justify-between items-center font-medium bg-white md:px-16 p-4 max-w-screen-2x1 mx-auto'>
                    <div className='flex space-x-14 items-center' >
                        <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
                            <img src={logo} alt="" className='w-20 ini' /><span>Disaster Management Center</span>
                        </a>
                    </div>

                    <div className=' hidden md:flex items-center'>

                        <TERipple>
                            <button
                                className="relative z-[2] rounded-l-full bg-secondary px-6 py-2 
                                font-medium text-lg uppercase text-black transition duration-150 ease-in-out hover:bg-primary 
                                hover:text-white focus:outline-none focus:ring-0"
                                type="button"
                                id="button-addon3">
                                Search
                            </button>
                        </TERipple>
                        <input
                            type="search"
                            className=' bg-grey rounded-r-full text-lg h-11'
                            aria-label="Search"
                            aria-describedby="button-addon3" />

                    </div>
                </div>

                {/*Nav Links */}
                <div className='bg-secondary text-x1 container mx-auto flex justify-between items-center md:px-14 p-2'>
                    <div className='flex space-x-14 items-center pl-20'>
                        <ul className='md:flex space-x-16 font-semibold hidden'>
                            {
                                navItems.map(({ link, path }) => <a key={link} href={path} className='block hover:text-white'>{link}</a>)
                            }
                        </ul>
                    </div>

                    <div className='pr-20'>
                        <button class=" text-black text-lg font-semibold hover:text-white ">
                            Login
                        </button>
                    </div>


                </div>
            </div>
        </nav>
    )
}

export default Navbar
