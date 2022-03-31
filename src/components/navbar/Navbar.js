import React from 'react';
import './navbar.scss';
import logo from '../../assets/navbar/logo-white.png';
import {Link} from 'react-scroll';
//React Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
 return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img className="logo" src={logo} alt="Code Vibes Consulting" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        {/* Need to add the font awesome component */}
        <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link smooth={true} to="home" offset={-120} className="nav-link" aria-current="page" href="#">Home</Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="about-me" offset={-110} className="nav-link" href="#">About me</Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">Services</Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="contact" offset={-110} className="nav-link" href="#">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
 )
}

export default Navbar