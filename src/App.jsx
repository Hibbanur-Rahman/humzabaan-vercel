import { Routes,Route } from 'react-router-dom'
import Home from './views/home'
import './assets/styles/font.scss'
import './assets/styles/main.scss'
import './assets/styles/responsive.scss';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
     <Routes>
      <Route exact path="/" element={<Home/>}/>
     </Routes>
     <ToastContainer/>
    </>
  )
}

export default App
