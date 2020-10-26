import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

import logo from '../assets/images/logo_holmes.png';
import Button from './Button';
import Modal from './Modal';

const Header = ({ mode }) => {
  const [modal, setModal] = useState([]);

  const nuevo = () => {
    setModal(!modal);
  };
  const addUser = () => {
    nuevo();
  };

  return (
    <div className={mode === 'dark' ? 'Header Header--dark' : 'Header'}>
      <Link to='/'><img className='Header__brand' src={logo} alt='logo' /></Link>
      <div className='Header__nav'>
        <a className='Header__nav-item' onClick={addUser}>Registrarme</a>
        <Button text='Mi cuenta' to='/profile' />
      </div>

    {/* <Modal visible={modal}>
        <div className='modal-content'>
          <span className='close' onClick={nuevo}>
            &times;
          </span>
          <h2>New User</h2>
          <span className='label'>Name</span>
          <input
            className='input'
            type='text'
            value={form.name}
            onChange={handleInputChange}
            name='name'
          />
          <br />
          <span className='label'>Lastname</span>
          <input
            className='input'
            type='text'
            value={form.lastname}
            onChange={handleInputChange}
            name='lastname'
          />
          <br />
          <span className='label'>Email</span>
          <input
            className='input'
            type='text'
            value={form.email}
            onChange={handleInputChange}
            name='email'
          />
          <br />
          <span className='label'>Phone</span>
          <input
            className='input'
            type='text'
            value={form.phone}
            onChange={handleInputChange}
            name='phone'
          />
          <button className='btn' onClick={saveUser}>
            Save
          </button>
          <br />
        </div>
      </Modal> */}
    </div>
  );
};
export default Header;

{ /* <Header mode='dark' /> */ }
