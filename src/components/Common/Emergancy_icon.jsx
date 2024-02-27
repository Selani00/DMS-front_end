import React from "react";
import { TbBellRingingFilled  } from "react-icons/tb";

const Emergancy_icon = () => {
  return (
    <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-4xl bg-red-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
      <TbBellRingingFilled style={{ color: "white" }} />
    </div>
  );
};

export default Emergancy_icon;
