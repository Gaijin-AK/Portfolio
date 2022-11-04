//main App.js file
//with components
//no Switch

import React from 'react';
import { BrowserRouter as  Router,Route, Routes } from 'react-router-dom';
import Home from './components/Main/Home/Home';
import About from './components/Main/About/About';
import Projects from './components/Main/Projects/Projects';
import Contact from './components/Main/Contacts/Contacts';
import Nav from './components/Header/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/project" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>
    </div>
  );
}

export default App;




