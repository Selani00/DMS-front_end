import './App.css'
import Home from './pages/Home'
import LoginPage from './pages/Login'
import Registration from './pages/Registration'
import Donations from './pages/Donations'
import Weather from './pages/Weather'
import Contact from './pages/Contact'
import News from './pages/News'
import SafetyTips from './pages/SafetyTips'
import UHome from "./pages/Dashboard/User_home"
import Emergancy_form from "./pages/Dashboard/Emergancy_form"
import UProfile from "./pages/Dashboard/Profile"
import Volunteering_form from "./pages/Dashboard/Volunteering"
import Donation_form from "./pages/Dashboard/Donation_form"
import { BrowserRouter,Routes,Route } from "react-router-dom";




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
        <Route path="/News" element={<News/>} />
        <Route path="/SafetyTips" element={<SafetyTips/>} />
        <Route path="/User_home" element={<UHome/>} />
        <Route path="/UProfile" element={<UProfile/>} />
        <Route path="/Emergancy_form" element={<Emergancy_form/>} />
        <Route path="/Volunteering_form" element={<Volunteering_form/>} />
        <Route path="/Donation_form" element={<Donation_form/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
