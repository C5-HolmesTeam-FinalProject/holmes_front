import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Button.scss';

const Button = ({ mode, text, onClick, to }) => {
  return (
    <Link
      to={to}
      className={mode === 'dark' ? 'button dark' : mode === 'darkred' ? 'button darkred' : 'button'}
      onClick={onClick}
    >
      {text}

    </Link>
  );
};

export default Button;
