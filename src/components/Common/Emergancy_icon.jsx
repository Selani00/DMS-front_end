import React, { useEffect, useState } from "react";
import { TbBellRingingFilled } from "react-icons/tb";
import Login from "../../pages/Login";


const Emergancy_icon = () => {
  const [user,setUser]=useState();

  useEffect(()=>{
    setUser(localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null);

  })


  return (
    <>
    {user? <a href="/Emergancy" >

    <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-4xl bg-red-600 w-11 h-11 md:w-16 md:h-16 flex items-center justify-center rounded-full animate-bounce">
        
        <TbBellRingingFilled
          style={{ color: "white" }}
          className="w-8 h-8 md:w-10 md:h-10"
        />
      </div>
    </a>: <a href="/Login">
      
    <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-4xl bg-red-600 w-11 h-11 md:w-16 md:h-16 flex items-center justify-center rounded-full animate-bounce">
        
        <TbBellRingingFilled
          style={{ color: "white" }}
          className="w-8 h-8 md:w-10 md:h-10"
        />
      </div></a>}
    
    
    </>
    
  );
};

export default Emergancy_icon;
