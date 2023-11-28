import Navbar from './components/Navbar';
import './index.css'
import {  Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Footer from './components/Footer';
const App = () => {
  return (
<main className='bg-slate-300/20'>
  <Router>
<Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contacts/>}/>
    </Routes>
<Footer/>
  </Router>
</main>
  )
}

export default App