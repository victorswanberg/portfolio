import React, { useState } from 'react';
import './contacts.scss'; 
import emailjs, { init } from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// This is the schema, you use this to define validation rules.
// Link to github repo https://github.com/jquense/yup 
const schema = yup.object({
  name: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().required(),
  subject: yup.string().required(),
  description: yup.string().min(30).max(255).required(),
}).required();
init("LD33pgKkeuGePRck7");

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  console.log({ errors });


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
    <div id="contact" className="contacts">
      <div className="text-center">
        <h1>Contact me</h1>
        <p className="px-3">
          Want to chat about a project? Drop me a line here.
        </p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div>
                <span className="error-message">
                  {errors.name?.message}
                </span>
              </div>
              <div className="text-center">
                {/* Description input */}
                <input
                id="name"
                className="form-control"
                placeholder="Name"
                name="name"
                type="text"
                label="Name"
                {
                  ...register("name" , {
                    required: true,
                    maxLength: {
                      value:20,
                      message:"Please enter a name with less than 20 characters"
                    }
                  })
                }
                />
                <div className="line"></div>
              </div>
              {/* Phone input */}
              <div>
                <span className="error-message">
                  {errors.phone?.message}
                </span>
              </div>
              <div className="text-center">
                <input
                id="phone"
                className="form-control"
                placeholder="Phone"
                name="phone"
                type="text"
                label="Phone"
                {
                  ...register("phone" , {
                    required: true,
                  })
                }
                />
                <div className="line"></div>
              </div>
              {/* Email input */}
              <div>
                <span className="error-message">
                  {errors.email?.message}
                </span>
              </div>
              <div className="text-center">
                <input
                id="email"
                className="form-control"
                placeholder="Email"
                name="email"
                type="email"
                label="Email"
                {
                  ...register("email" , {
                    required: true,
                  })
                }
                />  
                <div className="line"></div>
              </div>
                {/* Subject input */}
              <div>
                <span className="error-message">
                {errors.subject?.message}
                </span>
              </div>
              <div className="text-center">
                <input
                id="subject"
                className="form-control"
                placeholder="Subject"
                name="subject"
                type="text"
                lable="Subject"
                {
                  ...register("subject" , {
                    required: true,
                  })
                }
                />
                <div className="line"></div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* Description text */}
            <div>
              <span className="error-message">
                {errors.description?.message}
              </span>
            </div>
            <div className="text-center">
              <textarea 
              id="description"
              className="form-control"
              placeholder="Please describe your project needs..."
              name="description"
              type="text"
              label="Please describe your project needs"
              {
                ...register("description" , {
                  required: true,
                })
              }
              />
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <button className="btn-main-offer contact-btn" 
              type="submit">
              Submit
            </button> 
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts 