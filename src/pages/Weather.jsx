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
              placeholder="Search location..."
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
          <div className="absolute flex justify-between items-center top-10 w-full p-10">
            <div
              className="w-2/3 bg-white rounded-lg items-center "
              style={{ backgroundColor: "rgba(255, 255, 255, 0.40)" }}
            >
              <div className="py-10">
                <h1 className="text-black font-bold text-5xl px-5 mx-auto text-center">
                  Colombo
                </h1>

                <div className="flex justify-between gap-1 items-center p-5">
                  {/* first colum */}
                  <div className="px-5">
                    <div className=" text-center mx-auto py-5">
                      <h1 className="text-gray-700 text-4xl">09:03</h1>
                      <p className="text-black text-sm">Thursday, 31 Aug</p>
                    </div>

                    <div className="text-center py-5 mx-auto">
                      <h1 className="text-black text-5xl font-bold">24°C</h1>
                      <p className="text-gray-700 text-sm">
                        Feels like:
                        <span className="font-bold text-black">22°C</span>
                      </p>
                    </div>

                    <div className="item-center py-5 px-auto">
                      <div className="flex justify-center items-center gap-3">
                        <img src={sunset} alt="" />
                        <div className="text-start">
                          <h3 className="text-gray-700 font-semibold">
                            Sunrise
                          </h3>
                          <p className="text-black text-semibold">06:37 AM</p>
                        </div>
                      </div>
                      <div className="flex justify-center items-center gap-3 pt-3">
                        <img src={sunrise} alt="" />
                        <div className="text-start">
                          <h3 className="text-gray-700 font-semibold">
                            Sunset
                          </h3>
                          <p className="text-black text-semibold">06:37 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Middle column */}
                  <div className="text-center pt-20 items-center">
                    <h1 className="font-bold text-4xl">Sunny</h1>
                    <img src={sun} alt="" className="w-60 h-60" />
                  </div>

                  {/* last column */}
                  <div className="p-10">
                    <div className="flex justify-between items-center gap-10 py-5">
                      <div className="text-center">
                        <img src={humidity} alt="" className="w-15 h-15" />
                        <p className="font-bold mt-3">41%</p>
                        <p className="text-xs font-semibold">Humidity</p>
                      </div>
                      <div className="text-center">
                        <img src={pressure} alt="" className="w-15 h-15" />
                        <p className="font-bold mt-3">41%</p>
                        <p className="text-xs font-semibold">Humidity</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-center">
                        <img src={wind} alt="" className="w-15 h-15" />
                        <p className="font-bold mt-3">41%</p>
                        <p className="text-xs font-semibold">Humidity</p>
                      </div>
                      <div className="text-center">
                        <img src={uv} alt="" className="w-15 h-15" />
                        <p className="font-bold mt-3">41%</p>
                        <p className="text-xs font-semibold">Humidity</p>
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
              <div className="p-10">
                <h1 className="text-black text-3xl font-bold py-5">
                  Hourly Forecast
                </h1>
                <div>
                  <div className="flex justify-between items-center py-3">
                    <img src={sun} alt="" className="w-10 h-10" />
                    <p>20°C</p>
                    <p>12:00AM</p>
                  </div>
                  <div className="flex justify-between items-center text-base text-center py-3">
                    <img src={sun} alt="" className="w-10 h-10" />
                    <p>20°C</p>
                    <p>12:00AM</p>
                  </div>

                  <div className="flex justify-between items-center text-base text-center py-3">
                    <img src={sun} alt="" className="w-10 h-10" />
                    <p>20°C</p>
                    <p>12:00AM</p>
                  </div>

                  <div className="flex justify-between items-center text-base text-center py-3">
                    <img src={sun} alt="" className="w-10 h-10" />
                    <p>20°C</p>
                    <p>12:00AM</p>
                  </div>

                  <div className="flex justify-between items-center text-base text-center">
                    <img src={sun} alt="" className="w-10 h-10" />
                    <p>20°C</p>
                    <p>12:00AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-2xl px-10 md:mx-40 py-5 my-10">
          <h1 className="text-center font-bold text-primary text-3xl">
            7 days weather forcast
          </h1>
          <div className="flex justify-center md:gap-12 gap-6 items-center py-5 font-bold">
            <div className="items-center text-center">
              <div className="bg-gray-500 p-5 rounded-full">
                <h3>3 sep</h3>
                <img src={sun} alt="" className="w-10 h-10" />
                <p>20°C</p>
                <img src={wind} alt="" className="w-10 h-10" />
                <p>3km/h</p>
              </div>

              <h2 className="py-3">Monday</h2>
            </div>

            <div className="items-center text-center">
              <div className="bg-gray-500 p-5 rounded-full">
                <h3>3 sep</h3>
                <img src={sun} alt="" className="w-10 h-10" />
                <p>20°C</p>
                <img src={wind} alt="" className="w-10 h-10" />
                <p>3km/h</p>
              </div>

              <h2 className="py-3">Tuesday</h2>
            </div>

            <div className="items-center text-center">
              <div className="bg-gray-500 p-5 rounded-full">
                <h3>3 sep</h3>
                <img src={sun} alt="" className="w-10 h-10" />
                <p>20°C</p>
                <img src={wind} alt="" className="w-10 h-10" />
                <p>3km/h</p>
              </div>

              <h2 className="py-3">Wednesday</h2>
            </div>

            <div className="items-center text-center">
              <div className="bg-gray-500 p-5 rounded-full">
                <h3>3 sep</h3>
                <img src={sun} alt="" className="w-10 h-10" />
                <p>20°C</p>
                <img src={wind} alt="" className="w-10 h-10" />
                <p>3km/h</p>
              </div>

              <h2 className="py-3">Thursday</h2>
            </div>

            <div className="items-center text-center">
              <div className="bg-gray-500 p-5 rounded-full">
                <h3>3 sep</h3>
                <img src={sun} alt="" className="w-10 h-10" />
                <p>20°C</p>
                <img src={wind} alt="" className="w-10 h-10" />
                <p>3km/h</p>
              </div>

              <h2 className="py-3">Friday</h2>
            </div>

            <div className="items-center text-center">
              <div className="bg-gray-500 p-5 rounded-full">
                <h3>3 sep</h3>
                <img src={sun} alt="" className="w-10 h-10" />
                <p>20°C</p>
                <img src={wind} alt="" className="w-10 h-10" />
                <p>3km/h</p>
              </div>

              <h2 className="py-3">Saturday</h2>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Weather;
