import './App.css'
import Home from './pages/Home'
import LoginPage from './pages/Login'
import Registration from './pages/Registration'
import Donations from './pages/Donations'
import Weather from './pages/Weather'
import Contact from './pages/Contact'
import News from './pages/News'
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

      </Routes>
    </BrowserRouter>
  )
}

export default App
