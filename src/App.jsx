import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './index.css';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Projects from './pages/Projects';
const App = () => {

  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contacts />} />
                </Routes>
            
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App