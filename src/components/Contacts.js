import React, { useState } from 'react';
import{ init } from '@emailjs/browser';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
init("LD33pgKkeuGePRck7");

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();
  
   const form = useState();

  const serviceID = "service_x0qn78i";
  const templateID = "portfolio_request_work";
  const userID = "LD33pgKkeuGePRck7";

  const onSubmit = (data, reset) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name:data.name,
        phone:data.phone,
        email:data.email,
        subject:data.subject,
        description:data.description
      },
      userID
    )
    reset.target.reset();
    console.log(data);
  }
  const sendEmail = (serviceID, templateID, variables , userID) => {

    emailjs.send(serviceID, templateID, variables , userID)
      .then(() => {
          setSuccessMessage("Form sent successfully!");
      }).catch(err => console.error(`Something went wrong ${err}`))
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
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
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
                ref={
                  register({
                    required: "Please enter your name.",
                    maxLength: {
                      value:20,
                      message:"Please enter a name with less than 20 characters"
                    }
                  })
                }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              <div class="text-center">
                {/* Phone input */}
                <input
                id="phone"
                className="form-control"
                placeholder="Phone"
                name="phone"
                type="text"
                ref={
                  register({
                    required: "Please add your phone number",
                   
                  })
                }
                />
                <div className="line"></div>
                <span className="error-message">
                {errors.phone && errors.phone.message}
                </span>
              </div>
              <div class="text-center">
                {/* Email input */}
                <input
                id="email"
                className="form-control"
                placeholder="Email"
                name="email"
                type="email"
                ref={
                  register({
                    required: "Please add your email address",
                   
                  })
                }
                />  
                {/* Need to validate email with a pattern??? */}
                <div className="line"></div>
                <span className="error-message">
                {errors.email && errors.email.message}
                </span>
              </div>
              <div class="text-center">
                {/* Subject input */}
                <input
                id="subject"
                className="form-control"
                placeholder="Subject"
                name="subject"
                type="text"
                ref={
                  register({
                    required: "Please add a subject line",
                   
                  })
                }
                />
                <div className="line"></div>
                <span className="error-message">
                {errors.subject && errors.subject.message}
                </span>
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
              ref={
                register({
                  required: "Please add a brief description", 
                })
              }
              />
              <div className="line"></div>
              <span className="error-message">
                {errors.description && errors.description.message}
                </span>
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