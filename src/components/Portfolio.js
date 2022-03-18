import React from 'react';
import triplexxx from '../assets/portfolio-project-images/triplexxx.png';

const Portfolio = () => {
    return(
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">
                    Portfolio
                    <div className="image-box-wrapper row row-cols-auto justify-content-center">
                        <img className="portfolio-image" src={triplexxx} alt="triple xxx restraunt" />
                    </div>
                    {/*  */}
                    <div className="image-box-wrapper row row-cols-auto justify-content-center">
                        <img className="portfolio-image" src={triplexxx} alt="triple xxx restraunt" />
                    </div>
                    {/*  */}
                    <div className="image-box-wrapper row row-cols-auto justify-content-center">
                        <img className="portfolio-image" src={triplexxx} alt="triple xxx restraunt" />
                    </div>
                    {/*  */}
                    <div className="image-box-wrapper row row-cols-auto justify-content-center">
                        <img className="portfolio-image" src={triplexxx} alt="triple xxx restraunt" />
                    </div>
                    {/*  */}
                </h1>
            </div>
        </div>
    )
}

export default Portfolio; 