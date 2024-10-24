//Header.js 
import React from 'react'; 
import { Navbar, Nav, Container, Row } from 'react-bootstrap'; 
import { FontAwesomeIcon } 
from '@fortawesome/react-fontawesome'; 
import { faGithub, faLinkedin } 
from '@fortawesome/free-brands-svg-icons'; 

import { 
faInfoCircle, faCode, 
faFileAlt, faEnvelope 
} 
from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom'; 

// import './Header.css'; 
// import './style.css'; 

const Header = () => { 
return ( 
    <Container>
      <Navbar expand="md" bg="dark" fixed='bottom'>
        <Container>
          <Navbar.Brand as={Link} to="/"
              className="brand-name"> 
              <span className="h6 text-white ho"> 
              Home 
              </span> 
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/overview"
              className="brand-name"> 
              <span className="h6 text-white ho"> 
              Overview 
              </span> 
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/skills"
              className="brand-name"> 
              <span className="h6 text-white ho"> 
              Skills 
              </span> 
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/projects"
              className="brand-name"> 
              <span className="h6 text-white ho"> 
              Projects 
              </span> 
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/contact"
              className="brand-name"> 
              <span className="h6 text-white ho"> 
              Contact 
              </span> 
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
    
); 
}; 

export default Header;
