import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Header from './componets/Header/Header'
//import Store from './componets/Layout/Store'
import ContactPage from './Pages/ContactPage'
import AboutPage from './Pages/AboutPage'
import PortfolioPage from './Pages/PortfolioPage'
import Footer from './componets/Footer/Footer'
//import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import ServicesPage from './Pages/ServicesPage';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='portfolio' element={<PortfolioPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='services' element={<ServicesPage />} />
          <Route path='about' element={<AboutPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

