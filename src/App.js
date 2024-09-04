import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from './Home';
import WeeklyPlanner from './WeeklyPlanners';
import Navbar from './Navbar';
import About from './About';
import { Container } from 'react-bootstrap';
import Footer from './Footer';

const App = () => {
  return (
    <>
    
      <Navbar/>
    <Container> 
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planner" element={<WeeklyPlanner />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Container>
        <Footer />
    </>
  );
};

export default App;
