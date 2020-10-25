import React from 'react';
import { Link } from 'react-router-dom';
import yellowArrow from '../assets/images/yellowArrow.png';
import '../assets/styles/Button.scss';

const Button = ({ text, onClick }) => {

  return (
    <Link
      to='/'
      className='button'
      onClick={onClick}
    >
      {text}
      <img src={yellowArrow} alt='yellowArrow' />
    </Link>
  );
};

export default Button;
