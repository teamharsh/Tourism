import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Homeque from './components/Homeque';
import DetailView from './components/DetailView';
import "./App.css";
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Homeque />} />
        <Route path='/explore' element={<Explore/>}/>
        <Route path="/detail" element={<DetailView />} />
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
