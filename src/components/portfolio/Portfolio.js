import React from 'react';
import './portfolio.scss';
import triplexxx from '../../assets/portfolio/triplexxx.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
    return(
    <div id="portfolio" className="portfolio-wrapper">
        <h1 className="text-uppercase text-center py-5">
            Portfolio    
        </h1>
        <div className="image-box-wrapper">     
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="portfolio-image-box">
                            <img className="portfolio-image" src={triplexxx} alt="triple xxx restraunt" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-md-6 mb-3">
                        <div className="portfolio-image-box">
                            <img className="portfolio-image" src={triplexxx} alt="triple xxx restraunt" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-md-6 mb-3">
                        <div className="portfolio-image-box">
                            <img className="portfolio-image" src={triplexxx} alt="triple xxx restraunt" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-md-6 mb-3">
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