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
import UProfile from "./pages/Dashboard/Profile"
import Volunteering_form from "./Forms/Volunteering"
import Donation_form from "./Forms/Donation_form"
import UDashboard from "./pages/Dashboard/Dashbord"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import User_Main from "./pages/Dashboard/main";
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
        <Route path="/News" element={<News/>} />
        <Route path="/SafetyTips" element={<SafetyTips/>} />
        <Route path="/User_home" element={<UHome/>} />
        <Route path="/UProfile" element={<UProfile/>} />
        <Route path="/Emergancy" element={<Emergancy/>} />
        <Route path="/Volunteering_form" element={<Volunteering_form/>} />
        <Route path="/Donation_form" element={<Donation_form/>} />
        <Route path="/UDashboard" element={<UDashboard/>} />
        <Route path="/User_Main" element={<User_Main/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
