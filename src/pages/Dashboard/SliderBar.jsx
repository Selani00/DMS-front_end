import React, { useState } from "react";
import {
  FaArrowRight,
  FaHandPaper,
  FaMoneyBillWave,
  FaBell,
} from "react-icons/fa";

import { IoPersonCircle, IoChatbubbles, IoLogOut } from "react-icons/io5";
import { MdPayments } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";

const SiderBar = ({sidebarToggle,setSidebarToggle}) => {

    const User_menuList = [
        { icon: <IoPersonCircle className="inline-block w-6 h-6 mr-2 -mt-2"/>, label: "Profile",link: "/Profile"},
        {
          icon: <FaBell style={{ color: "red" }}  className="inline-block w-6 h-6 mr-2 -mt-2"/>,
          label: <span style={{ color: "red" }}>Emergency</span>,link: "/Emergancy_form"
        },
        { icon: <IoChatbubbles  className="inline-block w-6 h-6 mr-2 -mt-2"/>, label: "Chat", link: "/Profile" },
        { icon: <FaHandPaper  className="inline-block w-6 h-6 mr-2 -mt-2"/>, label: "Volunteering", link: "/Volunteering_form" },
        { icon: <FaMoneyBillWave  className="inline-block w-6 h-6 mr-2 -mt-2"/>, label: "Donations", link: "/Profile" },
        { icon: <MdPayments  className="inline-block w-6 h-6 mr-2 -mt-2"/>, label: "Payments", link: "/Profile" },
        { icon: <VscFeedback  className="inline-block w-6 h-6 mr-2 -mt-2"/>, label: "Feedback", link: "/User_home" },
      ];


    return(
        <div className={`${sidebarToggle? "hidden" :"w-64"} bg-primary fixed h-full px-4 py-2`}>
            <div className="my-2 mb-2">
                <h1 className="text-2xl font-bold text-white">User Dashboard</h1>
            </div>
            <hr/>

            <ul className="mt-3 text-white font-bold ">
          {User_menuList.map((item, index) => (
            <li
              key={index}
              className="mb-2 rounded hover:shadow hover:bg-gray-300 py-2 hover:text-black"
              
            >
              <a href={item.link} className="px-3">
                {item.icon}
                <span >
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>


        </div>
    )
}

export default SiderBar;