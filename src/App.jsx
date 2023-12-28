import './App.css'
import Home from './pages/Home'
import LoginPage from './pages/Login'
import Registration from './pages/Registration'
import { BrowserRouter,Routes,Route } from "react-router-dom";




function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="/Registration" element={<Registration/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
