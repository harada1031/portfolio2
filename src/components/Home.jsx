//Home.js 
import React from 'react'; 
import { FontAwesomeIcon } 
    from '@fortawesome/react-fontawesome'; 
import { faBook, faUser } 
    from '@fortawesome/free-solid-svg-icons'; 
import './style.css'; 
import { Container, Row, Nav } from 'react-bootstrap';
import { faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Home = () => { 
    return ( 
        // <Container>
            <section id="about"
            className="text-center text-white"> 
                <div className="col-md-8 offset-md-2"  style={{height:'100vh', alignContent:'center', overflow:'hidden'}}> 
                    
                    <div className="profile-image-container"> 
                        <img src="./images.jfif"
                            alt="geek pic"
                            className="img-fluid rounded-circle profile-image" 
                            /> 
                    </div> 
                    <p className="mt-2 text-white" style={{fontFamily:'monospace, sans-sripf'}}> 
                        When we unite in thought, even the moon becomes ours to grasp.
                    </p>
                    <h1 className="display-5 mt-4 text-white" style={{fontFamily:'system-ui, sans-sripf', fontWeight:700}}> 
                        Harada Kenji 
                    </h1> 
                    <p>Full Stack Developer</p>
                    <Nav className="display-6 text-white justify-content-center">
                        <Nav.Link href="https://google.com/HaradaK92" target='_blank'>
                        <FontAwesomeIcon icon={faGoogle} />
                        </Nav.Link>
                        <Nav.Link href="https://twitter.com/HaradaK92" target='_blank'>
                        <FontAwesomeIcon icon={faTwitter} />
                        </Nav.Link>
                        <Nav.Link href="https://github.com/HaradaK92" target='_blank'>
                        <FontAwesomeIcon icon={faGithub} />
                        </Nav.Link>
                        <Nav.Link href="https://resume.com/HaradaK92" target='_blank'>
                        <FontAwesomeIcon icon={faBook} />
                        </Nav.Link>
                        
                    </Nav>
                    {/* <p className="h4 mt-4 text-white"> 
                        I am a senior web developer with 9+ years of experience in full-stack development, implementing 
                        agile methodologies and technical project management and good at discover opportunities 
                        to improve the quality of the results. 
                    </p>  */}
                </div> 
        </section>
        // </Container>
         
    ); 
}; 

export default Home;
