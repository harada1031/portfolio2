// Contact.js 
import React from 'react'; 
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import './style.css'; 
import { personal_info } from '../data/Info';

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
        
        const mailtoLink = `mailto:${personal_info.email}?subject=Message from ${form.name}&body=${encodeURIComponent(form.message)}%0D%0AFrom: ${form.email}`;
        console.log(mailtoLink)
        window.location.href = mailtoLink;
      }
      setValidated(true);

    };
    return ( 
        <section id="contact" style={{minWidth: '450px'}}> 
            <Container fluid="sm">
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
                
                <Button type="submit">Send to {personal_info.name}</Button>
                
                </Form>
                    </Col>
                    <Col md={6} className="contact-details">
                        <div style={{ fontSize: '18px'}}>
                            <ul style={{listStyleType: 'none', lineHeight: 3}}>
                                <li>
                                    <i class="bi bi-envelope"></i>
                                    &nbsp;&nbsp;{personal_info.email}
                                </li>
                                <li>
                                    <i class="bi bi-github"></i>&nbsp; 
                                    <a href={personal_info.github} target='_blank' rel="noreferrer" style={{textDecoration:'none', color:'inherit'}}>
                                        &nbsp;{personal_info.github}
                                    </a>
                                </li>
                                <li>
                                    <i class="bi bi-book"></i>&nbsp;  
                                    <a href='/temp.pdf' target='_blank' rel="noopener noreferrer" style={{textDecoration:'none', color:"inherit"}}>
                                        &nbsp;Resume - {personal_info.name}
                                    </a>
                                </li>
                            </ul>
                            
                            
                        </div>
                    </Col>
                </Row> 
                
            </div>
            
            </Container>
        </section> 
    ); 
}; 

export default Contact;
