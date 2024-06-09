import { Routes,Route } from 'react-router-dom'
import Home from './views/home'
import './assets/styles/font.scss'
import './assets/styles/main.scss'
function App() {
  return (
    <>
     <Routes>
      <Route exact path="/" element={<Home/>}/>
     </Routes>
    </>
  )
}

export default App
