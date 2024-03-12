import './App.css'
import Home from './pages/Home'
import LoginPage from './pages/Login'
import Registration from './pages/Registration'
import Donations from './pages/Donations'
import Weather from './pages/Weather'
import Contact from './pages/Contact'
import Plan from './pages/Plan'
import News from './pages/News'
import SafetyTips from './pages/SafetyTips'

import Volunteering_form from "./Forms/Volunteering"
import Donation_form from "./Forms/Donation_form"

import { BrowserRouter,Routes,Route } from "react-router-dom";

import Emergancy from './Forms/Emergancy'



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/Registration" element={<Registration/>} />
        <Route path="/Donations" element={<Donations/>} />
        <Route path="/Weather" element={<Weather/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Plan" element={<Plan/>} />
        <Route path="/News" element={<News/>} />
        <Route path="/SafetyTips" element={<SafetyTips/>} />    
        <Route path="/Emergancy" element={<Emergancy/>} />
        <Route path="/Volunteering_form" element={<Volunteering_form/>} />
        <Route path="/Donation_form" element={<Donation_form/>} />
     
        

      </Routes>
    </BrowserRouter>
  )
}

export default App
