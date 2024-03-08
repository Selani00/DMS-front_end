import React,{useState} from 'react'
import Slidebar from './SliderBar'
import Dashboard from './Dashbord'

const main = () => {
  const [sidebarToggle,setSidebarToggle]=useState(false);
  return (
    <div>
        <div className='flex  '>
            <Slidebar sidebarToggle={sidebarToggle}/>
            <Dashboard sidebarToggle={sidebarToggle}
            
            setSidebarToggle={setSidebarToggle}/>
        </div>
      
    </div>
  )
}

export default main
