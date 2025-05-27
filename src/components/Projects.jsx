// Projects.js 
import React from 'react'; 
import { FontAwesomeIcon } 
    from '@fortawesome/react-fontawesome'; 
import { faCode } from '@fortawesome/free-solid-svg-icons'; 
import { Container } from 'react-bootstrap';
import './style.css'; 
import ProjectCard from './ProjectCard';
import { projectDetails } from '../data/Projects';

const Projects = () => { 
    // const breadcrumbsPaths = 
    //     [ 
    //         { title: 'Home', to: '/' }, 
    //         { title: 'Projects', to: '/projects' } 
    //     ]; 

    
    return ( 
        <section id="projects" style={{overflow: 'auto'}}> 
            <Container
            style={{
                textWrap: "wrap",
                height: "100vh",
            }}>
            <div className="row" style={{display: 'flex', flexDirection:'row', justifyContent: 'center', paddingTop: 70, paddingBottom:70, background: 'rgba(55,55,55,0.5)'}}> 
                {/* Project 1 */} 
                {
                    projectDetails.map((project, index) => (
                        <ProjectCard
                            key={index} 
                            title={project.title} 
                            description={project.description} 
                            image={project.image} 
                            link={project.link}
                        />
                    ))

                }
                                
            </div> 
            </Container>
        </section> 
    ); 
}; 

export default Projects;
