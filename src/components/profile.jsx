/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import '../assets/styles/profile.scss';
import React from 'react';
import usuario from '../assets/images/Usuario.png'

const Profile = () => {
  return (
    <>
      <div className='Mi__perfil'>
        <h1>Mi Perfil</h1>
      </div>

      <div className='Grid'>
        <div className='Grid__Formulario'>
          <form className='Grid__Formulario--form' action='' method='post'>
            <ul>
              <li>
                <label htmlFor='name'>Nombre de Usuario:</label>
                <input type='text' id='name' name='nombreUsuario' />
              </li>
              <li>
                <label htmlFor='mail'>Nombre(s):</label>
                <input type='email' id='mail' name='nombres' />
              </li>
              <li>
                <label htmlFor='mail'>Apellidos:</label>
                <input type='email' id='mail' name='apellidos' />
              </li>
              <li>
                <label htmlFor='mail'>Email:</label>
                <input type='email' id='mail' name='email' />
              </li>
              <li>
                <label htmlFor='mail'>Telefono:</label>
                <input type='email' id='mail' name='telefono' />
              </li>
            </ul>
          </form>
        </div>
        <div className='Grid__Imagen'>
          <img className='Grid__Imagen--usuario' src={usuario} alt='' />
          <div>
            <input className='Gridd__Imagen--btnImagen' type='submit' value='Cambiar Imagen' />
          </div>
        </div>
        <div className='Grid__Cambios'>
          <div className='Grid__BotonCambios'>
            <input className='Gridd__Cambios--btncambios' type='submit' value='Guardar Cambios' />
          </div>
        </div>
        <div className='Grid__imagen--contraseña'>
          <input className='Gridd__Imagen--btncontraseña' type='submit' value='Cambiar mi Contraseña' />
        </div>
      </div>

      <div className='Mis__Favoritos'>
        <h1>Mis Favoritos</h1>
      </div>

      <div className='Grid__MisFavoritos'>
        <div>card 1</div>
        <div>card 2</div>
        <div>Card 3</div>
      </div>

      <div className='Mis__Publicaciones'>
        <h1>Mis Publicaciones</h1>
      </div>

      <div className='Grid__Publicaciones'>
        <div>Publicacion 1</div>
        <div>Publicacion 2</div>
        <div>Publicacion 3</div>
      </div>
    </>
  );
};

export default Profile;
