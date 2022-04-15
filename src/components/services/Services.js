import React from 'react';
import './services.scss'
// import {Modal, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversalAccess , faGraduationCap , faArrowPointer , faFileCode } from '@fortawesome/free-solid-svg-icons';
import Flip from 'react-reveal/Flip';


//  const handleShow =() => setShow(true);

const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">Services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Flip top>
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" alt="" />
                                </div>
                                <h3>Web Development</h3>
                                <p>Specilizing in the front-end stack</p>
                                {/* <div className="button-container"> 
                                    <Button>Read more.</Button>
                                </div> */}
                            </div>
                        </Flip>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                    <Flip top>
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faArrowPointer} size="2x" alt=""  />
                            </div>
                            <h3>Web UI/X Consultant</h3>
                            <p>Helping people stay connected in a digital space.</p>
                    
                        </div>
                    </Flip>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Flip top>
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faGraduationCap} size="2x" alt=""  />
                            </div>
                            <h3>E-Learning technology</h3>
                            <p>Educating concepts using the Addie model. Skilled in multiple E-learning tools</p>
                        </div>
                    </Flip>
                    </div>
                        
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Flip top>
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faUniversalAccess} size="2x" alt=""  />
                            </div>    
                            <h3>A11y Expert</h3>
                            <p>Providing an inclusive enviroment is just common practice.</p>
                        </div>
                        </Flip>
                    </div>
                </div>
            </div>
        </div>
    )
}






export default Services;