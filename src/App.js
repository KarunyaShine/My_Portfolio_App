// import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import Skill from './components/Skill';
import Education from './components/Education';
import Experience from './components/Experience';
import Testmonial from './components/Testmonial';
import { Routes,Route,useLocation  } from 'react-router-dom';
import { useEffect, useState } from 'react';
function App() {
  const location = useLocation();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => {
      setFade(false);
    }, 500); // Match with the CSS transition duration
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className={`App ${fade ? 'fade' : ''}`}>
          <Navbar />
    <Routes location={location}>
    <Route path='*' element={<Home/>}/>
     <Route path='/aboutme' element={<Aboutme/>}/>
     <Route path='/education' element={<Education/>}/>
     <Route path='/skill' element={<Skill/>}/>
     <Route path='/experience' element={<Experience/>}/>
     <Route path='/testmonial' element={<Testmonial/>}/>
    </Routes>
    </div>
  );
}

export default App;
