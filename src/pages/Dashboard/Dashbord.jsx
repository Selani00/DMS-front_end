import { useState } from "react";
import Slidebar from "./SliderBar";
import User_Nav from "./User_Nav";

const Dashboard = ({sidebarToggle,setSidebarToggle}) => { 
    
    return(
        <div className={`${sidebarToggle ? "":"ml-64"} w-full fixed top-0 z-[999]`}>
            
            <User_Nav sidebarToggle={sidebarToggle}
            
            setSidebarToggle={setSidebarToggle}/>
        </div>
    )
 }

export default Dashboard;