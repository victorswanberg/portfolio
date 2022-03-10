import React from 'react';
import logo from '../assets/logo-white.png';
//React Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
 return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img className="logo" src={logo} alt="pushing limits connecting people" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        {/* Need to add the font awesome component */}
        <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
 )
}

export default Navbar