import React from "react";
import LanguageBar from "../components/Common/LanguageBar";
import Navbar from "../components/Common/Navbar";
import Emergancy from "../components/Common/Emergancy_icon";
import Footer from "../components/Common/Footer";

import image from "../assets/Weather/weather_back.png";

const Weather = () => {
  return (
    <div>
      <LanguageBar />
      <Navbar />
      <Emergancy />

      {/* Search Bar */}
      <form class="relative md:mt-11 mt-10 px-20 flex items-center">
        
        <div class="relative w-full">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-full focus:ring-gray-900 focus:border-gray-900 block w-full ps-12 p-2"
            placeholder="Search ..."
            required
          />
        </div>
        <button
          type="submit"
          class="p-2 ms-2 text-sm font-medium text-white bg-primary rounded-full border border-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-30 "
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 22s-8-4.5-8-11a8 8 0 1 1 16 0c0 6.5-8 11-8 11z"
            ></path>
            <circle cx="12" cy="11" r="3"></circle>
          </svg>

          
        </button>
      </form>

      {/* Weather Section */}
      <div className="p-5">
        <div>
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>

      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Weather;
