import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink className="navbar-brand" to="/">FAUZI <b className="bold">APRIANA</b></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-ellipsis-v menu-icon"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="cont-link">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#biodata">BIO DATA</a>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="#">INTRODUCE</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="#">EXPERIENCE</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="#">EDUCATION</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="#">SKILLS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="#">CONTACT</NavLink>
                    </li>    
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar