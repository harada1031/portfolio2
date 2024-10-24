// import logo from './logo.svg';
// import './App.css';
import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header'; 
import Projects from './components/Projects'; 
import Resume from './components/Resume'; 
import Contact from './components/Contact'; 
import Overview from './components/Overview'; 
import Skills from './components/Skills';
import VMenu from './components/VMenu';

import './components/style.css'; 
import Home from './components/Home';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      
        {/* <Header/> */}
        <VMenu/>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/overview" element={<Overview />} /> 
          <Route path="/skills" element={<Skills />} /> 
          <Route path="/resume" element={<Resume />} /> 
          <Route path="/contacts" element={<Contact/>} /> 
        </Routes>
    </Router>
  );
}

export default App;
