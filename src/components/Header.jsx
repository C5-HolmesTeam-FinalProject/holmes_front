import React from 'react';
import '../assets/styles/Header.scss';
import logo from '../assets/images/logo_holmes.png';
import Button from './Button';

const Header = ({ mode }) => (
  <div className={mode === 'dark' ? 'Header Header--dark' : 'Header'}>
    <img className='Header__brand' src={logo} alt='logo' />
    <div className='Header__nav'>
      <a className='Header__nav-item' href='/'>Registrarme</a>
      <Button className='Header__nav-item' text='Mi cuenta' onClick={() => console.log('a trabajar')} />
    </div>
  </div>
);

export default Header;

{ /* <Header mode='dark' /> */ }
