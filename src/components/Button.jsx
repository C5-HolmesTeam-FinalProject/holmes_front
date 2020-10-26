import React from 'react';
import { Link } from 'react-router-dom';
import Arrow from '../assets/images/yellowArrow.png';
import '../assets/styles/components/Button.scss';

const Button = ({ mode, text, onClick }) => {
  return (
    <Link
      to='/'
      className={mode === 'dark' ? 'button dark' : mode === 'darkred' ? 'button darkred' : 'button'}
      onClick={onClick}
    >
      {text}
      <img src={Arrow} alt='Arrow' />
    </Link>
  );
};

export default Button;
