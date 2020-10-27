import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import './navbar2.css'

function Navbar2() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Fauzi <span className="apriana-name">Apriana</span>
            {/* <i class="fab fa-typo3" /> */}
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-ellipsis-v icon-dot"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="#" className="nav-links" onClick={closeMobileMenu}>
                BIODATA
              </a>
            </li>
            <li className="nav-item">
              <a href="#introduce" className="nav-links" onClick={closeMobileMenu}>
                INTRODUCE
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#experience"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                EXPERIENCE
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-links" onClick={closeMobileMenu}>
                 EDUCATIONS
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                SKILLS
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                CONTACT
              </a>
            </li>          
          </ul>
        </div>
      </nav>
      </>
  )
}

export default Navbar2
