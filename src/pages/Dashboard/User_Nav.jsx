import React,{useState} from "react";
import { FaBars,FaSearch,FaBell,FaUserCircle    } from "react-icons/fa";

const User_Nav = ({setSidebarToggle,sidebarToggle}) => {
    return (
        <nav className="bg-primary px-4 py-3 flex justify-between">
            <div className="flex items-center md:text-xl text-base">
                <FaBars className="text-white me-4 cursor-pointer" onClick={()=>setSidebarToggle(!sidebarToggle)}/>
                <span className="text-white font-semibold">Disaster Management System</span>
            </div>
            <div className="flex items-center gap-x-5">
                <div className="relative md:w-65">
                    <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
                        <button className="p-1 focus:outline-none text-white md:text-black"><FaSearch /></button></span>
                    <input type="text" className="w-full px-4 py-1 pl-12 rounded outline-none hidden md:block"/>
                </div>

                <div className="text-white">
                    <FaBell className="w-6 h-6"/>
                </div>

                <div className="relative">
                    <button className="text-white group">
                        <FaUserCircle className="w-6 h-6 mt-1"/>
                        <div className="z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0">
                            <ul className="my-2 text-base text-black py-1">
                                <li>Profile</li>
                                <li>Setting</li>
                                <li>Log out</li>
                            </ul>
                        </div>

                    </button>
                </div>

            </div>
        </nav>
    )
}

export default User_Nav;