import { useState } from "react";
import {
  FaArrowRight,
  FaHandPaper,
  FaMoneyBillWave,
  FaBell,
} from "react-icons/fa";
import logo from "../../assets/logo.png";
import { IoPersonCircle, IoChatbubbles, IoLogOut } from "react-icons/io5";
import { MdPayments } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";

const Slidebar = () => {
  const [nav, setNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const User_menuList = [
    { icon: <IoPersonCircle />, label: "Profile",link: "/Profile"},
    {
      icon: <FaBell style={{ color: "red" }} />,
      label: <span style={{ color: "red" }}>Emergency</span>,link: "/Emergancy_form"
    },
    { icon: <IoChatbubbles />, label: "Chat", link: "/Profile" },
    { icon: <FaHandPaper />, label: "Volunteering", link: "/Volunteering_form" },
    { icon: <FaMoneyBillWave />, label: "Donations", link: "/Profile" },
    { icon: <MdPayments />, label: "Payments", link: "/Profile" },
    { icon: <VscFeedback />, label: "Feedback", link: "/User_home" },
  ];
  return (
    <div
      className={`${
        !nav ? "w-[200px]" : "w-30"
      } h-screen bg-primary  relative duration-300 container`}
    >
      {/* <div
        onClick={handleNav}
        className={`text-gray-600 bg-gray-200 border-gray-800 w-10 h-10 flex items-center justify-center text-xl 
            rounded-full absolute top-7 right-[-15px] ${
              nav ? "0" : "rotate-180"
            } duration-300`}
      >
        <FaArrowRight />
      </div> */}
      <a href="/">
        <div className="flex items-center text-2xl gap-4 p-2 text-white cursor-pointer border-b border-white font-semibold">
          <div className="bg-white w-20 h-20 rounded-full flex justify-center items-center">
            <img src={logo} alt="" className="w-20 object-cover" />
          </div>
          <h1 className={`${nav ? "hidden" : "flex"}`}>DMC</h1>
        </div>
      </a>

      <div className="mt-6">
        <ul className="text-gray-300 flex flex-col gap-5 p-2">
          {User_menuList.map((item, index) => (
            <li
              key={index}
              className={`${
                nav ? "w-10 h-10 flex justify-center items-center " : ""
              }  text-lg hover:bg-gray-300 hover:text-black p-2 rounded-md cursor-pointer`}
            >
              <a href={item.link} className="flex gap-4 items-center">
                {item.icon}
                <span className={`${nav ? "hidden" : "flex"}`}>
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20 text-gray-300 flex items-center justify-start gap-5 p-2 mx-2 hover:bg-gray-300 hover:text-black rounded-md cursor-pointer">
        <IoLogOut className="w-15 h-15" />
        <h1 className="text-lg">Logout</h1>
      </div>

      
    </div>
  );
};

export default Slidebar;
