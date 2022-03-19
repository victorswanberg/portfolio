import React from 'react';
import triplexxx from '../assets/portfolio-project-images/triplexxx.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
    return(
    <div className="portfolio-wrapper">
        <h1 className="text-uppercase text-center py-5">
            Portfolio    
        </h1>
        <div className="image-box-wrapper">     
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
             
                        <div className="portfolio-image-box">
                            <img className="portfolio-image" src={triplexxx} alt="triple xxx restraunt" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
            
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="portfolio-image-box">
                            <img className="portfolio-image" src={triplexxx} alt="triple xxx restraunt" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="portfolio-image-box">
                            <img className="portfolio-image" src={triplexxx} alt="triple xxx restraunt" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="portfolio-image-box">
                            <img className="portfolio-image" src={triplexxx} alt="triple xxx restraunt" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    )
}

export default Portfolio; 