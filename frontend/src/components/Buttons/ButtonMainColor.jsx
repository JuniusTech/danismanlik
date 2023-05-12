import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonMainColor = ({ children, ...props }) => {
  const buttonStyle = {
    height: '40px',
    background: 'var(--main-color)',
    borderRadius: '5px',
    borderColor: 'var(--main-color)',
    opacity: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px'
  };

  const textStyle = {
    height: '20px',
    fontSize: '17px',
    fontWeight: 'bold',
    lineHeight: '20px',
    fontFamily: 'SF Pro Text',
    letterSpacing: '0px',
    color: '#FFFFFF',
    opacity: '1',
    textAlign: 'center'
  };

  return (
    <Button style={buttonStyle} {...props}>
      <span style={textStyle}>{children}</span>
    </Button>
  );
};

export default ButtonMainColor;

