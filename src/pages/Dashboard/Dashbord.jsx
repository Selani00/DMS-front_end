import { useState } from "react";
import Slidebar from "./SliderBar";
import User_Nav from "./User_Nav";

const Dashboard = ( ) => { 
    const [sidebarToggle,setSidebarToggle]=useState(false);
    return(
        <div className="flex w-full fixed top-0 left-0 z-[999] ">
            <Slidebar sidebarToggle={sidebarToggle}/>
            <User_Nav 
            sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle}/>
        </div>
    )
 }

export default Dashboard;