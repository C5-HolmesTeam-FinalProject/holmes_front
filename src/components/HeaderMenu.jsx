import React from 'react';
import { Link } from 'react-router-dom';

import ActionButton from './ActionButton';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

export default function HeaderMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
        <div>
        <ActionButton text='Mi cuenta' onClick={handleClick} />
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>Iniciar Sesión</MenuItem>
            <Link to='/profile'><MenuItem onClick={handleClose}>Mi Perfil</MenuItem></Link>
            <Link to='/addpost'><MenuItem onClick={handleClose}>Añadir Publicación</MenuItem></Link>
            <MenuItem onClick={handleClose}>Salir</MenuItem>
        </Menu>
        </div>
    </>
  );
};
