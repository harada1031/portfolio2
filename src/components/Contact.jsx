// Contact.js 
import React from 'react'; 
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } 
    from '@fortawesome/react-fontawesome'; 
import { faEnvelope, faPhone } 
    from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import { Container, Card, Nav } from 'react-bootstrap';
import './style.css'; 

const Contact = () => { 
    const [validated, setValidated] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = (e) => {
      e.preventDefault();
      if (e.currentTarget.checkValidity() === false) {
        console.log("Form is invalid");
        e.stopPropagation();
      }
      else{
        
        const mailtoLink = `mailto:mooncatch91031@gmail.com?subject=Message from ${form.name}&body=${encodeURIComponent(form.message)}%0D%0AFrom: ${form.email}`;
        console.log(mailtoLink)
        window.location.href = mailtoLink;
      }
      setValidated(true);

    };
    return ( 
        <section id="contact"> 
            <Container className="contact-container">
            {/* <Breadcrumbs paths={breadcrumbsPaths} />  */}
            <div style={{padding:'2rem', backgroundColor: 'rgba(10,10,10,0.7)', color:'#fff'}}>
                <h2 className="section-title">Contact</h2> 
                <Row>
                    <Col md={6} className="contact-info">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group as={Col} controlId="validationCustom01">
                        <Form.Label>Full name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={form.name}
                            placeholder="Your Full name"
                            onChange={(e) => setForm({...form, name: e.target.value})}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <br/>
                    <Form.Group as={Col} controlId="validationCustomUsername">
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                            type="email"
                            placeholder="Email"
                            aria-describedby="inputGroupPrepend"
                            value={form.email}
                            onChange={(e) => setForm({...form, email: e.target.value})}
                            required
                            />
                            <Form.Control.Feedback type="invalid">
                            Please choose a your email address.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <br/>
                    <Form.Group as={Col} controlId="validationCustomUsername">
                        <Form.Label>Message</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                            as="textarea"
                            placeholder="Your message here"
                            value={form.message}
                            aria-describedby="inputGroupPrepend"
                            onChange={(e) => setForm({...form, message: e.target.value})}
                            required
                            />
                            <Form.Control.Feedback type="invalid">
                            Please write message.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                
                <Button type="submit">Send</Button>
                
                </Form>
                    </Col>
                    <Col md={6} className="contact-details">
                        <div style={{ fontSize: '20px'}}>
                            <ul style={{listStyleType: 'none', lineHeight: 3}}>
                                <li>
                                    <i class="bi bi-envelope"></i> mooncatch91031@gmail.com
                                </li>
                                <li>
                                    <i class="bi bi-github"></i>&nbsp; 
                                    <a href='https://github.com/DragonKnight0522' target='_blank'  style={{textDecoration:'none', color:'inherit'}}>
                                        https://github.com/DragonKnight0522'
                                    </a>
                                </li>
                                <li>
                                    <i class="bi bi-book"></i>&nbsp;  
                                    <a href='/temp.pdf' target='_blank' rel="noopener noreferrer" style={{textDecoration:'none', color:"inherit"}}>
                                        My Resume
                                    </a>
                                </li>
                            </ul>
                            
                            
                        {/* <Nav.Link href="https://twitter.com/HaradaK92" target='_blank'>
                        <i class="bi bi-twitter"></i>
                        </Nav.Link>
                        <Nav.Link href="https://github.com/HaradaK92" target='_blank'>
                        <i class="bi bi-envelope"></i>
                        </Nav.Link>
                        <Nav.Link href="https://resume.com/HaradaK92" target='_blank'>
                        <i class="bi bi-envelope"></i>
                        </Nav.Link> */}
                        </div>
                    </Col>
                </Row>
                
            </div>
            
            </Container>
        </section> 
    ); 
}; 

export default Contact;
