import {Routes, Route} from "react-router-dom"
import './App.css'
import HomeComponent from "./components/Home.component"
import 'swiper/css';
import 'swiper/css/navigation';
// import Login from "./components/Login";


function App() {

  return (
    <Routes>
      <Route path="/" element={<HomeComponent/>}/>
      {/* <Route path="/connect-to-pumpfun" element={<Login/>}/> */}
    </Routes>
  )
}

export default App
