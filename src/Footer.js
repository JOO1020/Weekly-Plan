// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTiktok } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Weekly Planner. All rights reserved.</p>
      <p>Follow Us on Socail Media.</p>
      <div style={styles.links}>
        <Link to={`https://www.facebook.com/profile.php?id=61565578252225&mibextid=qi2Omg&rdid=9Esu82NVXMlogmQ8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FfpHtUiQWzrHp3BSo%2F%3Fmibextid%3Dqi2Omg`} style={styles.link}><FaFacebook /></Link>
        <Link to={`https://www.instagram.com/myon_notebook?utm_source=qr`} style={styles.link}><RiInstagramFill /></Link>
        <Link to={`https://www.tiktok.com/@myon857?_t=8pQPFbwbGF7&_r=1`} style={styles.link}><FaTiktok /></Link>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#007bff',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
    marginTop:"50px",
    fontSize:".9rem",
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
  links: {
    marginTop: '5px',
  },
  link: {
    margin: '0 10px',
    color: 'white',
    textDecoration: 'none',
  },
};

export default Footer;
