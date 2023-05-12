import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonWhiteColor = ({ children, ...props }) => {
  const buttonStyle = {
    height: '40px',
    background: '#FFFFFF',
    border: '1px solid #00242E',
    borderRadius: '5px',
    opacity: '1',
    fontSize: '17px',
    fontWeight: 'bold',
    lineHeight: '20px',
    fontFamily: 'SF Pro Text',
    letterSpacing: '0px',
    color: '#00242E',
    textAlign: 'center',
    margin: '10px' 
  };

  const textStyle = {
    height: '20px',
    font: 'normal normal bold 17px/20px SF Pro Text',
    letterSpacing: '0px',
    color: '#00242E',
    textAlign: 'center',
    opacity: '1'
  };

  return (
    <Button style={buttonStyle} {...props}>
    <span style={textStyle}>{children}</span>
  </Button>
  );
};

export default ButtonWhiteColor;
