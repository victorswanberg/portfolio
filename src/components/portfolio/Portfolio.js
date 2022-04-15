import React from 'react';
import './portfolio.scss';
import { Card, Button } from 'react-bootstrap'
import triplexxx from '../../assets/portfolio/triplexxx.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Portfolio = () => {
    return(
    <div id="portfolio" className="portfolio-wrapper" >
        <h1 className="text-uppercase text-center py-5">
            Portfolio    
        </h1>
            <div className="row
             d-flex justify-content-evenly">
                <div className="col-lg-4 col-md-5 mb-3">
                    <Card className="h-100">
                    <Card.Img variant="top" src={triplexxx} alt="Triple XXX restraunt." />
                        <Card.Body>
                            <Card.Title>Triple XXX website</Card.Title>
                            <Card.Text> 
                            <p>Problem: The current website really used old technology. It was not accessbilble and not mobile friendly.
                            </p>
                            <p>Solution: I took the old website and pulled as many assets as i can re-use. I did lot's of research on the buisness and created a mobile friendly site using bootstrap. I desgined the page with no wireframes and wrote in content where I could.
                            </p>
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
                {/*  */}
                 {/* <div className="col-lg-4 col-md-5 mb-3">
                  
                        <Card className="h-100">
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
                    </div> */}
  
            </div>

       
    </div>
   
    )
}

export default Portfolio; 