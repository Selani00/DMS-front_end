import React, { useState } from "react";
import LanguageBar from "../components/Common/LanguageBar";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import Emergancy from "../components/Common/Emergancy_icon";
import image from "../assets/Footer.png";

import News_Items from "../components/News/News_Items";

const News = () => {
  const [selectedNews,setNewsSelected]=useState(null);

  const handleSelectNews=(news)=>{
    setNewsSelected(news);
  };
  
  return (
    <>
      <LanguageBar />
      <Navbar />
      <Emergancy/>
      {/* Breaking News */}
      <div className="relative w-full h-8  top-5 px-5">
        <div className="flex bg-red-600 items-center">
          <div className="md:w-1/8 w-1/10 bg-white h-full  p-0 items-center flex justify-center m-2">
            <h1 className="font-bold px-3 md:text-lg text-base text-red-600 shadow-lg">
              Breaking News
            </h1>
          </div>
          <div className="items-center flex justify-center px-3">
            <p className="text-sm text-white ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              animi repellendus reiciendis, aperiam ut iure{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Search */}

      <form className="relative md:mt-12 mt-20 px-20">
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 "
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
            type="search"
            id="search"
            class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500   "
            placeholder="Search"
            required
          />
        </div>
      </form>

      {/* News Section */}
      <div className="flex justify-between py-5 px-5 gap-5">
        {/* left Section */}
        <div className="sm:w-2/3 bg-gray-200 ">
          <div className="px-5 py-3">
            {selectedNews && (
              <div>
                <h1 className="text-primary font-bold md:text-3xl text-lg">
                  {selectedNews.heading}
                </h1>
                <p className="my-3 text-base">{selectedNews.Auther}</p>
                <div className="w-1/4 flex justify-between text-xs text-gray-500">
                  <p>{selectedNews.date}</p>
                  <p>{selectedNews.time}</p>
                </div>

                <div className="mt-5">
                  <img src={selectedNews.image? selectedNews.image:image} alt="" className="object-cover w-full h-full" />
                </div>

                <div className="mt-3">
                  <p className="text-black text-sm leading-7">
                    {selectedNews.news_body}
                  </p>
                </div>         
              </div>

            )}
          </div>

            {/* Prev and Next Button */}
          <div className="flex justify-between my-10 mx-5">
              <button
                type="button"
                className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm md:px-5 px-2.5 py-2.5 text-center inline-flex items-center"
              >
                <svg
                  className="w-3.5 h-3.5 me-2 transform rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
                <span className="hidden sm:inline ">Previous</span>
              </button>

              <button
                type="button"
                className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm md:px-5 px-2.5 py-2.5 text-center inline-flex items-center "
              >
                <span className="hidden sm:inline">Next</span>
                <svg
                  className="w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
        </div>
        

        {/* Right Section */}
        <div className="w-1/3 border border-black">
          <News_Items onSelectedNews={(value) => {
            handleSelectNews(value);
          }}/>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default News;
