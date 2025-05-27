import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard(props) {

  return (
    <>
    <style>
    {`
        .portfolio-content {
            position: relative;
            overflow: hidden;
            color: #bbb;
            max-width: 24rem; 
            height: 18rem;
            // margin: 1rem;

        }
        img {
            max-width: 100%;
            height: auto;
            transition: 0.3s;
        }
        .portfolio-info a {
            position: absolute;
            text-decoration: none;
            color: inherit;
            font-size: 26px;
            top: calc(50% - 14px);
            transition: 0.3s;
            line-height: 1.2;  
        }
        .portfolio-info a.zoom {
            left: 1rem;
            top: calc(50% - 14px);
        }
        .portfolio-info a.visit {
            right: 1rem;
            top: calc(50% - 14px);
            font-size: 28px;
        }
        .portfolio-content p {
            position: absolute;
            bottom: 10px;
            font-size: 1rem;
            font-weight: 600;
        }
        .portfolio-info {
            height: 100%;
            width: 100%;
            position: absolute;
            inset: 0;
            z-index: 3;
            opacity: 0;
            background-color: rgba(0, 0, 0, 0.7);
            padding: 1rem;
            
        }  
        .portfolio-info:hover {
            opacity: 1;
            transition: all 0.5s ease-in-out;
            color: #bbb;
            border: 1px solid #bbb;
        }
        .portfolio-info h4 {
            font-size: 14px;
            padding: 5px 10px;
            font-weight: 400;
            color: #ffffff;
            display: inline-block;
            background-color: #5566aa;
        }
        .portfolio-content:hover img {
            transform: scale(1.2);
        }
          
    
    `}
    </style>
    <div style={{ maxWidth: '24rem', height:'18rem', margin: '1rem'}}>
        <div className='portfolio-content'>
            <img src={props.image} alt=""/>
            <div className='portfolio-info'>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <a href={props.image} target="_blank" className='zoom'>
                    <i className="bi bi-zoom-in"></i>
                </a>
                <a href={props.link} title="visit" target="_blank" className='visit'>
                    <i className="bi bi-link-45deg"></i>
                </a>
            </div>
        </div>
    </div>
    </>
  );
}

export default ProjectCard;