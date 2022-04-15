import React, {useLayoutEffect, useState} from 'react';
import {FaRegHandPointUp} from 'react-icons/fa';
import {Button, OverlayTrigger, Tooltip} from 'react-bootstrap';
import './scroll-btn.scss';

const renderTooltip = (props) => (
<Tooltip id="button-tooltip" {...props}>
    Scroll to top 
  </Tooltip>
);

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo(0,0);
  };
  
  useLayoutEffect (() => {
  window.addEventListener('scroll', toggleVisible);
  })
    if (!visible) {
      return null;
    }
    
  return (
    <OverlayTrigger
    placement="top"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}>
      <Button className="scroll-btn" onClick={scrollToTop} >
      <FaRegHandPointUp className="fa-solid"
      style={{display: visible ? 'inline' : 'none'}} />
      </Button>
    </OverlayTrigger>
  );
}

export default ScrollButton;