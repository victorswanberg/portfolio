import React from 'react';
import './footer.scss';

import {  
  FacebookIcon, 
  FacebookShareButton, 
  LinkedinIcon,
  LinkedinShareButton
} from 'react-share'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 mb-5 mb-md-0">
            <div>
              <p>City of Everett, WA 98204</p>
            </div>
            <div>
              <a href="tel:425-773-8165">425-773-8165</a>
            </div>
            <div>
              <a href="mailto:codevibesconsulting@gmail.com">codevibesconsulting@gmail.com</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6 mb-5 mb-md-0">
            <div className="row">
              <div className="col">
                <a href="#home" className="footer-nav">Home</a>
                  <br />
                <a href="#about-me" className="footer-nav">About Me</a>
                  <br />
                <a href="#services" className="footer-nav">Services</a>
              </div>
              <div className="col">
                <a href="#experience" className="footer-nav">Experience</a>
                  <br />
                <a href="#portfolio" className="footer-nav">Portfolio</a>
                  <br />
                <a href="#contact" className="footer-nav">Contact</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 text-center align-items-center">
            <div>
              <FacebookShareButton
                url={"www.victorswanberg.dev"}
                quote={"Front-end-developer"}
                hashtag="#React.js"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <LinkedinShareButton
                url={"https://www.linkedin.com/in/victor-swanberg/"}
                quote={"Front-end-developer"}
                hashtag="#React.js"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Code Vibes | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Footer;