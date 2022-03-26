import React from 'react';

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
        </div>
      </div>
    </div>
  )
}



export default Footer;