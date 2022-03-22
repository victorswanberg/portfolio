import React from 'react';

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="text-center">
        <h1>Contact me</h1>
        <p>
          Please fill out the form and describe your project needs and I'll contact you as soon as possible.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
          <div className="line"></div>
            {/* Description input */}
            <input
            id="name"
            className="form-control"
            placeholder="Name"
            name="name"
            type="text"
            />
            <div className="line"></div>
            {/* Phone input */}
            <input
            id="phone"
            className="form-control"
            placeholder="Phone"
            name="phone"
            type="text"
            />
            <div className="line"></div>
             {/* Email input */}
            <input
            id="email"
            className="form-control"
            placeholder="Email"
            name="email"
            type="email"
            />
            <div className="line"></div>
             {/* Subject input */}
            <input
            id="subject"
            className="form-control"
            placeholder="Subject"
            name="subject"
            type="text"
            />
          </div>
          <div className="col-md-6 col-xs-12">
          <div className="line"></div>
            {/* Description text */}
            <textarea 
            id="descruption"
            className="form-control"
            type="text"
            placeholder="Description"
            />
            <button className="btn-main-offer contact-btn" 
            type="submit">
              Contact Me
            </button>
           
            
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts 