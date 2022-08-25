import { Routes, Route } from 'react-router-dom'
import './App.css'
import AboutUs from './Pages/AboutUs'
import Contacts from './Pages/Contacts'
import Home from './Pages/Home'
import News from './Pages/News'
import Projects from './Pages/Projects'

function App() {

  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/news' element={<News/>}/> 
      <Route path='/projects' element={<Projects/>}/> 
      <Route path='/aboutus' element={<AboutUs/>}/> 
      <Route path='/contact' element={<Contacts/>}/> 
    </Routes>
    </div>
  )
}

export default App
