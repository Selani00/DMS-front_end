import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Slidebar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={`${
        !nav ? "w-[200px]" : "w-30"
      } h-screen bg-primary  relative duration-300`}
    >
      <div
        onClick={handleNav}
        className={`text-gray-600 bg-gray-200 border-gray-800 w-10 h-10 flex items-center justify-center text-xl 
            rounded-full absolute top-7 right-[-15px] ${
              nav ? "0" : "rotate-180"
            } duration-300`}
      >
        <FaArrowRight />
      </div>
      <a href="/">
        <div className="flex items-center text-2xl gap-4 p-2 text-white cursor-pointer">
          <div className="bg-white w-20 h-20 rounded-full flex justify-center items-center">
            <img src={logo} alt="" className="w-20" />
          </div>
          <h1 className={`${nav ? "hidden" : "flex"}`}>DMC</h1>
        </div>
      </a>

      <div></div>
    </div>
  );
};

export default Slidebar;
