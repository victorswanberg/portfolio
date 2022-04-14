import React from 'react';
import './portfolio.scss';
import { Card, Button } from 'react-bootstrap'
import triplexxx from '../../assets/portfolio/triplexxx.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
    return(
    <div id="portfolio" className="portfolio-wrapper" >
        {/* <h1 className="text-uppercase text-center py-5">
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
                
                    <div className="col-md-6 mb-3">
                        <div className="portfolio-image-box">
                            <img className="portfolio-image" src={triplexxx} alt="triple xxx restraunt" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
           
                    <div className="col-md-6 mb-3">
                        <div className="portfolio-image-box">
                            <img className="portfolio-image" src={triplexxx} alt="triple xxx restraunt" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
              
                    <div className="col-md-6 mb-3">
                        <div className="portfolio-image-box">
                            <img className="portfolio-image" src={triplexxx} alt="triple xxx restraunt" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
                </div>
            </div> 
            </div> */}
        <h1 className="text-uppercase text-center py-5">
            Portfolio    
        </h1>
            <div className="row mb-5">
                <div className="col-4"></div>
                <div className="col-md-4 mb-3 d-flex justify-content-center">
                   
                        <Card className="card h-100">
                        <Card.Img variant="top" src={triplexxx} alt="Triple XXX restraunt." />
                            <Card.Body>
                                <Card.Title>Triple XXX website</Card.Title>
                                <Card.Text>
                                A project that I built for a buisness located over in Issaquah, WA. This was built in Bootstrap 4. 
                                </Card.Text>
                                <div className="row text-center">
                                    <div className="col-12 col-md-6">
                                        <Button href="#/portfolio" target="_blank" variant="primary">Review</Button>
                                    </div>
                                    <div className="col-12 col-md-6"> 
                                    <Button href="http://www.triplexrootbeer.com/" target="_blank" variant="primary">Old site</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
              
                </div>
                <div className="col-4"></div>
                {/*  */}
                {/* <div className="col-md-4 mb-3 d-flex justify-content-center">
                    <div className="card-container">
                        <Card>
                        <Card.Img variant="top" src={triplexxx} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Review</Button>
                            </Card.Body>
                        </Card> 
                    </div>
                </div> */}
                {/* <div className="col-md-4 mb-3 d-flex justify-content-center">
                    <div className="card-container">
                        <Card>
                        <Card.Img variant="top" src={triplexxx} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Review</Button>
                            </Card.Body>
                        </Card> 
                    </div>
                </div> */}
            </div>

       
    </div>
   
    )
}

export default Portfolio; 