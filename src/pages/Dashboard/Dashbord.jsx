import { useState } from "react";
import User_Nav from "./User_Nav";


const Dashboard = ({sidebarToggle,setSidebarToggle}) => { 
    
    return(
        <div className={`${sidebarToggle ? "":"ml-64"} w-full`}>
            
            <User_Nav sidebarToggle={sidebarToggle}           
            setSidebarToggle={setSidebarToggle}/>
            

            
        </div>
    )
 }

export default Dashboard;