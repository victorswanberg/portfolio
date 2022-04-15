import React from 'react';
import {FaLinkedin, FaGithub, FaFileDownload} from 'react-icons/fa';
import './side-gadget.scss'
import {Button} from 'react-bootstrap';

const Gadget = () => {
  return (
      <div className="gadget-group">
          <Button href="https://www.linkedin.com/in/victor-swanberg/" target='_blank' className="linked-in">
            <span className="px-1">LinkedIn</span>
            <FaLinkedin  />
          </Button>
          <Button href="https://github.com/victorswanberg" target='_blank' className="github">
            <span className="px-1">Github</span>
            <FaGithub />
          </Button>
          <Button href="/resume/resume(fy22).pdf" target='_blank' className="resume-download">
            <span className="px-1">Resume</span>
            <FaFileDownload />
          </Button>
      </div>
  )
}

export default Gadget;