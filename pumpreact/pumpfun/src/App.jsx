import {Routes, Route} from "react-router-dom"
import './App.css'
import HomeComponent from "./components/Home.component"
import 'swiper/css';
import 'swiper/css/navigation';
import { Admin } from "./components/Admin.component";


function App() {

  return (
    <Routes>
      <Route path="/" element={<HomeComponent/>}/>
      <Route path="/pumpfun-admin" element={<Admin/>}/>
    </Routes>
  )
}

export default App
