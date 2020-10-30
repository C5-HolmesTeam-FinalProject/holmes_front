import React from 'react';

import Layout from '../components/Layout';
import SimilarListings from '../components/SimilarListings';
import Button from '../components/Button'

import '../assets/styles/Profile.scss';

import photoUser from '../assets/images/Usuario.png';
import { Container } from '@material-ui/core';

const Profile = () => {
  return (
    <>
      <Layout>
        <section className="userData">
          <h1>Mi Perfil</h1>
        </section>
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
            <img className='Grid__Imagen--usuario' src={photoUser} alt='' />
            <div className="Grid__Imagen--btnCambiar">
              <Button text='Cambiar Imágen' />
            </div>
          </div>
          <div className='Grid__Cambios'>
            <div className='Grid__BotonCambios'>
              <Button text='Guardar cambios' />
            </div>
          </div>
          <div className='Grid__imagen--contraseña'>
            <Button text='Cambiar Contraseña' mode='darkred' />
          </div>
        </div>

        <div className='Mis__Favoritos'>
          <h1>Mis Favoritos</h1>
        </div>

        <div className='Grid__MisFavoritos'>
          <SimilarListings />
        </div>

        <div className='Mis__Publicaciones'>
          <h1>Mis Publicaciones</h1>
        </div>

        <div className='Grid__Publicaciones'>
          <SimilarListings />
        </div>
      </Layout>
    </>
  );
};

export default Profile;
