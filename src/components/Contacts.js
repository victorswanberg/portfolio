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
            {/* Name input */}
            <input
            className="form-control"
            placeholder="Name"
            name="name"
            />
             {/* Phone input */}
             <input
            className="form-control"
            placeholder="Phone"
            name="phone"
            />
             {/* Email input */}
             <input
            className="form-control"
            placeholder="Email"
            name="email"
            />
             {/* Subject input */}
             <input
            className="form-control"
            placeholder="Subject"
            name="subject"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts 