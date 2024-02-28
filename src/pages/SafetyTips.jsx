import React from "react";
import LanguageBar from "../components/Common/LanguageBar";
import Navbar from "../components/Common/Navbar";
import Emergancy_icon from "../components/Common/Emergancy_icon";
import Image from "../assets/SafetyTips/SafetyTips_banner.png";

const SafetyTips = () => {
  return (
    <div>
      <LanguageBar />
      <Navbar />
      <Emergancy_icon />

      {/* Banner Image Section */}
      <div className="bg-gray-300">
        <div className="relative">
          <div className="md:h-[70vh] w-full">
            <img src={Image} alt="" className=" h-full w-full object-cover" />
          </div>

          <div className="absolute md:bottom-5 md:left-10 bottom-2 left-5">
            <h1 className="text-lg sm:text-3xl md:text-5xl text-bold font-bold leading-12 italic">
              Your Safety is
              <br /> Our Priority
            </h1>
          </div>
        </div>

        {/* Safety tips section */}
        <div className="p-10">
            <h1>dhigsifs</h1>
        </div>
      </div>
    </div>
  );
};

export default SafetyTips;

{
  /*  */
}
