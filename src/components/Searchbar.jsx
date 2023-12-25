import React from 'react'
import logo from '../assets/logo_main.png'
import { FaSearch,FaMicrophone } from "react-icons/fa";

const Searchbar = () => {
    return (
        <section class="relative  overflow-hidden bg-lightblue py-4 px-8">

            <div class="-mx-4 flex flex-wrap items-center">
                <div class="w-full px-4 lg:w-1/2 md:w-1/2">
                    <div class="text-center lg:text-left ">
                        <a href="/" className='lg:text-2xl text-xl font-bold flex items-center space-x-3 text-primary'>
                            <img src={logo} alt="" className='w-20 ini' /><span>Disaster Management Center</span>
                        </a>
                    </div>
                </div>
                <div class="relative w-full lg:w-1/2 md:w-1/2 mt-5 px-10">
                    <div class="text-center lg:text-right relative ">
                        <i class="absolute text-black top-1/2 transform -translate-y-1/2 left-4"><FaSearch /></i>
                        <input type="text" class="bg-white h-14 w-full pl-12 rounded-lg focus:outline-none hover:cursor-pointer" name="" />
                        <span class="absolute top-1/2 transform -translate-y-1/2 right-5 border-l pl-4 cursor-pointer">
                            <i class="fa fa-microphone text-black hover:text-primary"><FaMicrophone/></i></span>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Searchbar
