import React from 'react'
import LanguageBar from '../components/LanguageBar'
import Navbar from '../components/Navbar'
import Image_slider from '../components/Image_slider'
import Emergancy from '../components/Emergancy_button'
import Services from '../components/Services'
import More from '../components/More_from_us'
import Footer from '../components/Footer'
import AboutN from '../components/About_new'

const Home = () => {
  return (
    <div>
      <LanguageBar/>
      <Navbar/>
      <Emergancy/>
      <Image_slider/>     
      <Services/>
      <More/>
      <AboutN/>
      <Footer/>
      
    </div>
  )
}

export default Home
