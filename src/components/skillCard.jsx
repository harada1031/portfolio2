// Skills.js 
import React from 'react'; 
import { FontAwesomeIcon } 
    from '@fortawesome/react-fontawesome'; 
import { faCode, faLaptopCode } 
    from '@fortawesome/free-solid-svg-icons'; 
import { faCogs } 
    from '@fortawesome/free-solid-svg-icons'; 
import './style.css'; 
import { Container } from 'react-bootstrap';

const Skills = () => { 
    return ( 
        <Container>
        <section id="skills"
            className="container"
            style={{ paddingLeft: '0px' }}> 
            <h2 className="section-title"> 
                <FontAwesomeIcon icon={faCogs} 
                    className="mr-2" /> 
                Skills 
            </h2> 
            <ul className="skills-list"> 
                <li> 
                    <FontAwesomeIcon icon={faCode} 
                        className="mr-2" /> 
                    HTML 
                </li> 
                <li> 
                <FontAwesomeIcon icon="fa-brands fa-github" />
                    CSS 
                </li> 
                <li> 
                    <FontAwesomeIcon icon={faCode} 
                        className="mr-2" /> 
                    JavaScript 
                </li> 
                <li> 
                    <FontAwesomeIcon icon={faLaptopCode} 
                        className="mr-2" /> 
                    React 
                </li> 
                <li> 
                    <FontAwesomeIcon icon={faLaptopCode} 
                        className="mr-2" /> 
                    Bootstrap 
                </li> 
                <li> 
                    <FontAwesomeIcon icon={faLaptopCode} 
                        className="mr-2" /> 
                    DSA 
                </li> 
                <li> 
                    <FontAwesomeIcon icon={faLaptopCode} 
                        className="mr-2" /> 
                    Node.js 
                </li> 
                <li> 
                    <FontAwesomeIcon icon={faLaptopCode} 
                        className="mr-2" /> 
                    Python 
                </li> 
                <li> 
                    <FontAwesomeIcon icon={faLaptopCode} 
                        className="mr-2" /> 
                    Java 
                </li> 
                {/* Add more skills as needed */} 
            </ul> 
        </section> 
        </Container>
        
    ); 
}; 

export default Skills;
