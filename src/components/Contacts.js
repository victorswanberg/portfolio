// import React, {useState} from 'react';
import{ init } from '@emailjs/browser';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
init("LD33pgKkeuGePRck7");

const Contacts = () => {
  const form = useRef();

  const serviceID = "service_x0qn78i";
  const templateID = "portfolio_request_work";
  const userID = "LD33pgKkeuGePRck7";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contacts">
      <div className="text-center">
        <h1>Contact me</h1>
        <p className="px-3">
          Please fill out the form and describe your project needs and I'll contact you as soon as possible.
        </p>
      </div>
      <div className="container">
        <form ref={form} onSubmit={sendEmail}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div class="text-center">
                {/* Description input */}
                <input
                id="name"
                className="form-control"
                placeholder="Name"
                name="name"
                type="text"
                />
                <div className="line"></div>
              </div>
              <div class="text-center">
                {/* Phone input */}
                <input
                id="phone"
                className="form-control"
                placeholder="Phone"
                name="phone"
                type="text"
                />
                <div className="line"></div>
              </div>
              <div class="text-center">
                {/* Email input */}
                <input
                id="email"
                className="form-control"
                placeholder="Email"
                name="email"
                type="email"
                />  
                <div className="line"></div>
              </div>
              <div class="text-center">
                {/* Subject input */}
                <input
                id="subject"
                className="form-control"
                placeholder="Subject"
                name="subject"
                type="text"
                />
                <div className="line"></div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
            <div class="text-center">
              {/* Description text */}
              <textarea 
              id="description"
              className="form-control"
              placeholder="Please describe your project needs..."
              name="description"
              type="text"
              />
              <div className="line"></div>
            </div>
              <button className="btn-main-offer contact-btn" 
              type="submit">
                Contact Me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts 