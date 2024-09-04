// src/pages/LandingPage.js
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../src/Home.css"
import Footer from './Footer';

const Home = () => {
  return (
    <Container className='h-100 d-flex realtive'>
    <div className='landing'>
      <h1>Welcome to Weekly Planner</h1>
      <p>Organize your weekly tasks efficiently and download them as a PDF.</p>
      <Link to="/planner">
        <button style={styles.button}>Go to Planner</button>
      </Link>
    </div>
    </Container>
  );
};

const styles = {
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Home;
