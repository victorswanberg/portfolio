import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter, faFontAwesome } from '@fortawesome/free-brand-svg-icons';
 import { faUniversalAccess , faGraduationCap , faArrowPointer , faFileCode } from '@fortawesome/free-solid-svg-icons';



const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">My services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
                            </div>
                            <h3>Web Development</h3>
                            <p>Specilizing in the front-end stack</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faArrowPointer} size="2x" />
                            </div>
                            <h3>Web UI/X Consultant</h3>
                            <p>Helping people stay connected in a digital space.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faGraduationCap} size="2x" />
                            </div>
                            <h3>E-Learning technology</h3>
                            <p>Educating concepts using the addie model and learning theory.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faUniversalAccess} size="2x" />
                            </div>    
                            <h3>A11y Expert</h3>
                            <p>Providing an inclusive enviroment is just common practice.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}






export default Services;