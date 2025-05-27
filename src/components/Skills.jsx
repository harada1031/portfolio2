import React from 'react'; 
import { FontAwesomeIcon } 
    from '@fortawesome/react-fontawesome'; 
// import { faCode, faLaptopCode } 
//     from '@fortawesome/free-solid-svg-icons'; 
import { faCogs } 
    from '@fortawesome/free-solid-svg-icons'; 
import { faGithub, faGoogle, faHtml5, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './style.css'; 
import { Container, Badge, Row, Col, Card, ListGroup, Image, Button } from 'react-bootstrap';
import { skills_data } from '../data/Skill';



const Skills = () => { 
    return ( 
        <section id='skills'>
            <Container fluid
            style={{
                overflowX: "scroll",
                textWrap: "nowrap",
                height: "100vh"
            }}
        >
                {skills_data.map((section)=>(
                        <Card bg={'dark'} text='light' border={section.bordercolor} className='my-4 mx-2' style={{width:350, display: "inline-block"}}>
                            <Card.Header as='h3'>{section.title}</Card.Header>
                            <Card.Body>
                                    <ListGroup as="ul">
                                        {section.dataset.map((item, idx)=> (
                                            <ListGroup.Item 
                                            action 
                                            as="li" 
                                            className="mt-1 d-flex border-0 align-items-center" style={{backgroundColor:'#ddd'}}>
                                                <div className='image-container'>
                                                    <img src={item.img} alt={item.name} height={70} width={70} 
                                                    />
                                                </div>
                                                <div className='m-2'>
                                                    <div className="fw-bold mb-2">{item.name}</div>
                                                    <Button variant='outline-dark'>
                                                        <Badge 
                                                            bg={item.years>5 ? 'info' : item.years > 3 ? 'success' : 'warning'}
                                                            text={item.years>5 ? 'white' : item.years > 3 ? 'white' : 'dark'}
                                                            pill={true}
                                                        >
                                                            {item.years}+
                                                        </Badge> years of exp
                                                    </Button>
                                                    
                                                    {/* <span className='badge backcolor-purple'>frontend</span> */}
                                                </div>
                                                
                                            </ListGroup.Item>
                                        ))}
                                        
                                    </ListGroup>
                            </Card.Body>
                        </Card>
                ))}
        </Container>
        </section>
        
        
    ); 
}; 

export default Skills;

