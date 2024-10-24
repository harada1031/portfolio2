//Overview.js 
import React from 'react'; 
import { FontAwesomeIcon } 
    from '@fortawesome/react-fontawesome'; 
import { faUser } 
    from '@fortawesome/free-solid-svg-icons'; 
import './style.css'; 
import { Container } from 'react-bootstrap';

const Overview = () => { 
    return ( 
        <Container>
            <section id="Overview"
            className="container text-center"> 
            <div className="row"> 
                <Container>
                <div className="col-md-8 offset-md-2"> 
                    <h2 className="section-title"> 
                        <FontAwesomeIcon icon={faUser} 
                            className="mr-2" /> 
                        Overview 
                    </h2> 
                    <p className="section-description mt-4"> 
                        I am a skilled Internship Trainee with over 6 months of 
                        hands-on experience in full-stack web development. My 
                        expertise includes using technologies such as Node.js, 
                        Java, JSP, HTML, CSS, and Bootstrap. As a problem solver, 
                        I have successfully designed and developed user-friendly, 
                        responsive web applications. 
                    </p> 
                </div> 
                </Container>
                
            </div> 
        </section>
        </Container>
         
    ); 
}; 

export default Overview;
