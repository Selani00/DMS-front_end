import React, { useState, useEffect } from "react";
import image1 from "../../assets/Slide_Bar/one.png";
import image2 from "../../assets/Slide_Bar/two.png";
import image3 from "../../assets/Slide_Bar/three.png";
import image4 from "../../assets/Slide_Bar/four.png";
import { TbBellRingingFilled  } from "react-icons/tb";

let currentSlideID = 1;
let intervalId;

const next = () => {
  const sliderElement = document.getElementById("slider");
  const totalSlides = sliderElement.childElementCount;

  if (currentSlideID < totalSlides) {
    currentSlideID++;
    showSlider();
  } else {
    currentSlideID = 1;
    showSlider();
  }
};

const prev = () => {
  if (currentSlideID > 1) {
    currentSlideID--;
    showSlider();
  } else {
    const sliderElement = document.getElementById("slider");
    currentSlideID = sliderElement.childElementCount;
    showSlider();
  }
};

const showSlider = () => {
  const slides = document.getElementById("slider").getElementsByTagName("li");
  const totalSlides = slides.length;

  for (let i = 0; i < totalSlides; i++) {
    const element = slides[i];
    if (currentSlideID === i + 1) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  }
};

const Image_slider = () => {
  const [timerEnabled, setTimerEnabled] = useState(true);

  useEffect(() => {
    if (timerEnabled) {
      intervalId = setInterval(() => {
        next();
      }, 3000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [timerEnabled]);

  return (
    <div>
      <div className="relative">
        <ul id="slider">
          <li className="h-[60vh] relative ">
            <img src={image1} alt="" className="w-full h-full object-cover" />
          </li>
          <li className="h-[60vh] relative hidden">
            <img src={image2} alt="" className="w-full h-full object-cover" />
          </li>
          <li className="h-[60vh] relative hidden">
            <img src={image3} alt="" className="w-full h-full object-cover" />
          </li>
          <li className="h-[60vh] relative hidden">
            <img src={image4} alt="" className="w-full h-full object-cover" />
          </li>
        </ul>

        <div className="absolute px-3 flex h-full w-full top-0 left-0 ">
          <div className="my-auto w-full flex justify-between">
            <button
              onClick={prev}
              className="bg-white p-2 md:p-3 rounded-full bg-opacity-70 shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-3 h-3 md:w-6 md:h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
            </button>
            <button
              onClick={next}
              className="bg-white p-2 md:p-3 rounded-full bg-opacity-80 shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-3 h-3 md:w-6 md:h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="absolute w-full h-8  top-5 px-5">
          <div className="flex bg-white items-center">
            <div className="md:w-1/8 w-1/10 bg-gradient-to-br from-red-600 via-red-800 to-black h-full hover:bg-gradient-to-r p-1 items-center flex justify-center">
              <h1 className="font-bold px-3 md:text-lg text-base text-white shadow-lg">
                Warnings
              </h1>
            </div>
            <div className="items-center flex justify-center px-3">
              <p className="md:text-sm text-xs text-black ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                animi repellendus reiciendis, aperiam ut iure{" "}
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Image_slider;


