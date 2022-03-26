import React from 'react';
import {  
  FacebookIcon, 
  FacebookShareButton, 
  LinkedinIcon,
  LineShareButton
} from 'react-share'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>City Everett WA  </p>
            </div>
            <div className="d-flex">
              <a href="tel:425-773-8165">425-773-8165</a>
            </div>
            <div className="d-flex">
              <p>victorswanberg89@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div class="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                  <br />
                <a className="footer-nav">About</a>
                  <br />
                <a className="footer-nav">Services</a>
              </div>
              <div className="col">
                <a className="footer-nav">Experience</a>
                  <br />
                <a className="footer-nav">Portfolio</a>
                  <br />
                <a className="footer-nav">Contact</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                quote={"Front-end-developer"}
                hashtag="#React.js"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <LineShareButton
                quote={"Front-end-developer"}
                hashtag="#React.js"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LineShareButton>
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