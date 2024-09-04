import React from 'react'
import '../src/Navbar.css'
import { Link } from 'react-router-dom'
import { Container} from 'react-bootstrap'
function Navbar() {
  return (
    <div className='header'>

      <div className='nav'>
        <div>
          <img src='../img/logo.png' alt='logo' sizes={1} className='logo-img'/>
        </div>
        <div>
          <ul>
            <Link to='/' style={{textDecoration:"none"}}><li>Home</li></Link>
            <Link to="planner" style={{textDecoration:"none"}}><li>Planner</li></Link>
            <Link to="/about" style={{textDecoration:"none"}}><li>About</li></Link>
          </ul>
        </div>
      </div>
    
    </div>
  )
}

export default Navbar;