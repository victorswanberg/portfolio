import React, {useLayoutEffect, useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import {Button} from 'react-bootstrap';
import './scroll-btn.scss';

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
    <Button className="scroll-btn">
     <FaArrowCircleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </Button>
  );
}

export default ScrollButton;