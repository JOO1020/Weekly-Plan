import React from 'react'
import { Container } from 'react-bootstrap'
import "./About.css"
function About() {
  return (
    <Container className='main'>
      <div className='image'>
        <img alt='about' src='../img/WhatsApp Image 2024-09-04 at 1.51.22 AM.jpeg'/>
      </div>
            <div className='text'>
                <p>At <span>MYON</span> We Believe that every individual is a world of creativity that deserves to be discovered. We don’t just offer a notebook, we offer you a unique experience to create your own personal space that perfectly reflects your identity. We start our journey with you by taking the 16 Personality Test, to discover your unique personality aspects. Then our team of talented designers work hand in hand with you to create a personalized e-notebook that reflects your personality and style. With every letter you write, your own story is shaped, and your thoughts are transformed into a digital text that you can access anytime, anywhere. <br/>

<span>Our vision </span>is to be more than just a writing platform, but rather a partner in your journey of self-discovery and creativity. We seek to be the future of notebooks, where technology meets creativity to deliver a unique and unforgettable experience.</p>
            </div>
    </Container>
  )
}

export default About