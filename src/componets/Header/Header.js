import { useState, useEffect } from 'react'
import { Tooltip } from "reactstrap"
import { NavLink } from 'react-router-dom'
import { GrHomeRounded } from 'react-icons/gr'
import './Header.css'
import fs from '../../assets/images/fs.png'
import sr from '../../assets/images/sr.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'





const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showToggle, setShowToggle] = useState(false);


  
const toggleNavbar = () => {
   setIsOpen(!isOpen);
};

const handleResize = () => {
  if (window.innerWidth <= 1200) {
    setShowToggle(true);
  } else {
    setShowToggle(false);
    setIsOpen(false);
  }
};

useEffect(() => {
  handleResize(); // Call the function when the component mounts initially

  window.addEventListener('resize', handleResize); // Add event listener for resize

  return () => {
    window.removeEventListener('resize', handleResize); // Clean up the event listener when the component unmounts
  };
}, []); 


  return (
  <>
    {showToggle && (
      <div>
      <button 
        className="navbar-toggle sticky"
        style={{
          width: '60px', 
          height: '35px', 
          marginLeft: '0px',
          marginTop: '25px'
        }} 
        onClick={toggleNavbar}
      >
        <span className="arrow arrow-right"></span>
        <span className="arrow arrow-right arrow-gap"></span>
      </button>
  
    </div>
    )
  };



  <div className={`sidenav col-md-3 col-lg-1 ${isOpen ? 'collapsed' : ''}`}>
    
      {showToggle && (
            <button className="navbar-toggle" onClick={toggleNavbar}>
                <span class="arrow arrow-left"></span>
                <span class="arrow arrow-left arrow-gap"></span>
            </button>
            )}

    <a href='/'>

      <img src={sr} width="90%" alt="Stephen Rogers" />
      <img
        src={fs}
        width="70%"
        className="rounded-circle"
        id="headShot"
        alt="HeadShot"
      />
      </a>
      <div>
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/portfolio">
          Portfolio
        </NavLink>
        <NavLink className="nav-link" to="/services">
          Services
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
      </div>

      <div className="d-flex justify-content-start ">
        <a href="https://www.linkedin.com/in/stephen-rogers-443b00255/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://github.com/srcodes12" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
    </>
  );
};

export default Header;