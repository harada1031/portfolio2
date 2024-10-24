import React from 'react';
import { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
// import '../App.css'; // Import custom CSS
import { Link } from 'react-router-dom'; 

const StickyButtonGroup = () => {

  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { status: 'Radio', value: '1', href:'/', name:'Home'},
    { status: 'Radio', value: '2', href:'/skills', name:'Skills'},
    { status: 'Radio', value: '3', href:'/projects',  name:'Projects'},
    { status: 'Radio', value: '4' , href:'/contacts', name:'Contacts'},
  ];
    return (
        <div style={{width:'100%', position:'fixed', bottom:'5%', textAlign:'center', zIndex:10}}> 
            <ButtonGroup>
                {radios.map((radio, idx) => (
                <Button
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={'primary'}
                    as={Link}
                    to={radio.href}
                    name={radio.name}
                    active={radioValue === radio.name}
                    size={radioValue === radio.name ? 'lg' : 'md'}
                    onClick={(e) => setRadioValue(e.currentTarget.textContent)}
                >
                    {radio.name}
                </Button>
                ))}
            </ButtonGroup>
        </div>
    );
};

export default StickyButtonGroup;
