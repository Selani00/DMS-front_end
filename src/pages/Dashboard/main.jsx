import React,{useState} from 'react'
import Slidebar from './SliderBar'
import Dashboard from './Dashbord'
import emergancy_form from './Emergancy_form'

const main = () => {
  const [sidebarToggle,setSidebarToggle]=useState(false);
  return (
    <div>
        <div className='flex top-0 z-[999] fixed w-full'>
            <Slidebar sidebarToggle={sidebarToggle}/>
            <Dashboard sidebarToggle={sidebarToggle}
            
            setSidebarToggle={setSidebarToggle}/>
        </div>
        <div><h1>Hello</h1></div>
      
    </div>
  )
}

export default main
