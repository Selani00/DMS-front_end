import './App.css'
import Home from './pages/Home'
import LanguageBar from './components/LanguageBar'
import Searchbar from './components/Searchbar'
import Navbar from './components/Navbar'
import Image_slider from './components/Image_slider'
import Emergancy from './components/Emergancy_button'
import Services from './components/Services'
import More from './components/More_from_us'
import Footer from './components/Footer'
import AboutN from './components/About_new'



function App() {


  return (
    <>
      <LanguageBar/>
      <Searchbar/>
      <Navbar/>
      <Emergancy/>
      <Image_slider/>
      
      <Services/>
      <More/>
      <AboutN/>
      <Footer/>
 

    </>
  )
}

export default App
