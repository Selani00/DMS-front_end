import React,{useState} from 'react'
import Slidebar from './SliderBar'
import Dashboard from './Dashbord'

const main = () => {
  const [sidebarToggle,setSidebarToggle]=useState(false);
  return (
    <div>
        <div className='flex top-0 z-[999] fixed w-full'>
            <Slidebar sidebarToggle={sidebarToggle}/>
            <Dashboard sidebarToggle={sidebarToggle}
            
            setSidebarToggle={setSidebarToggle}/>
        </div>
      
    </div>
  )
}

export default main
