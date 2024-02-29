import React from "react";
import LanguageBar from "../components/Common/LanguageBar";
import Navbar from "../components/Common/Navbar";
import Emergancy from "../components/Common/Emergancy_icon";
import Footer from "../components/Common/Footer";

import image from "../assets/Weather/weather_back.png";
import sunrise from "../assets/Weather/sunrise.png";
import sunset from "../assets/Weather/sunset.png";
import sun from "../assets/Weather/sun.png";
import humidity from "../assets/Weather/humidity.png";
import pressure from "../assets/Weather/pressure.png";
import wind from "../assets/Weather/wind.png";
import uv from "../assets/Weather/uv.png";

const Weather = () => {
  return (
    <div>
      <LanguageBar />
      <Navbar />
      <Emergancy />

      <div className="relative w-full px-5">
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
        <div className="relative p-5">
          <div>
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>

          {/* Current daya weather details */}
          <div className="absolute flex justify-between items-center top-10 w-full px-5">
            <div
              className="w-2/3 bg-white rounded-lg  "
              style={{ backgroundColor: "rgba(255, 255, 255, 0.40)" }}
            >
              <div className="py-5">
                <h1 className="text-black font-bold text-5xl px-5 mx-auto">
                  Colombo
                </h1>

                <div className="flex justify-between gap-1 items-center p-5">
                  {/* first colum */}
                  <div className="">
                    <div>
                      <h1>09:03</h1>
                      <p>Thursday, 31 Aug</p>
                    </div>

                    <div>
                      <h1>24°C</h1>
                      <p>Feels like:22°C</p>
                    </div>
                    <div>
                      <div className="flex justify-center items-center">
                        <img src={sunset} alt="" />
                        <div>
                          <h3>Sunrise</h3>
                          <p>06:37 AM</p>
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <img src={sunrise} alt="" />
                        <div>
                          <h3>Sunset</h3>
                          <p>06:37 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Middle column */}
                  <div className="item-center">
                    <h1>Sunny</h1>
                    <img src={sun} alt="" />
                  </div>

                  {/* last column */}
                  <div>
                    <div className="flex justify-between items-center">
                      <div>
                        <img src={humidity} alt="" />
                        <p>41%</p>
                        <p>Humidity</p>
                      </div>
                      <div>
                        <img src={pressure} alt="" />
                        <p>41%</p>
                        <p>Humidity</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <img src={wind} alt="" />
                        <p>41%</p>
                        <p>Humidity</p>
                      </div>
                      <div>
                        <img src={uv} alt="" />
                        <p>41%</p>
                        <p>Humidity</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-white rounded-lg mr-10"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.40)" }}
            >
              <div className="p-5">
                <h1 className="text-black text-3xl font-bold">Hourly Forecast</h1>
                <div>
                  <div className="flex justify-between items-center">
                    <img src={sun} alt="" className="w-10 h-10"/>
                    <p>20°C</p>
                    <p>12:00AM</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <img src={sun} alt="" className="w-10 h-10"/>
                    <p>20°C</p>
                    <p>12:00AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1>7 days weather forcast</h1>
          <div className="flex justify-between items-center">
            <div>
              <h3>3 sep</h3>
              <img src={sun} alt="" className="w-10 h-10"/>
              <p>20°C</p>
              <img src={wind} alt="" className="w-10 h-10"/>
              <p>3km/h</p>

              <h2>Monday</h2>
            </div>

            <div>
              <h3>3 sep</h3>
              <img src={sun} alt="" className="w-10 h-10"/>
              <p>20°C</p>
              <img src={wind} alt="" className="w-10 h-10"/>
              <p>3km/h</p>

              <h2>Monday</h2>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Weather;
