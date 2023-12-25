import './App.css'
import Home from './pages/Home'
import LanguageBar from './components/LanguageBar'
import Searchbar from './components/Searchbar'
import Navbar from './components/Navbar'
import Image_slider from './components/Image_slider'
import About from './components/About'
import Services from './components/Services'
import More from './components/More_from_us'
import Footer from './components/Footer'



function App() {


  return (
    <>
      <LanguageBar/>
      <Searchbar/>
      <Navbar/>
      <About/>
      <Services/>
      <More/>
      <Footer/>
 

    </>
  )
}

export default App
