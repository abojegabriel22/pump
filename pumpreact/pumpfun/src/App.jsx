import {Routes, Route} from "react-router-dom"
import './App.css'
import HomeComponent from "./components/Home.component"
import 'swiper/css';
import 'swiper/css/navigation';


function App() {

  return (
    <Routes>
      <Route path="/" element={<HomeComponent/>}/>
    </Routes>
  )
}

export default App
