// CommonAncestor.jsx
import { useState } from "react";
import Dashboard from "./Dashbord";
import User_Nav from "./User_Nav";
//This should be use 

const CommonAncestor = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <div>
      <Dashboard sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
      <EmergencyForm sidebarToggle={sidebarToggle} />
    </div>
  );
};

export default CommonAncestor;
