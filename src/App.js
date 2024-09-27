// import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import Skill from './components/Skill';
import Education from './components/Education';
import Experience from './components/Experience';
import Testmonial from './components/Testmonial';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
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
