import React from 'react';

import Layout from '../components/Layout';
import ButtonMenu from '../components/ButtonMenu';
import Button from '../components/Button';

import '../assets/styles/AddPost.scss';
import image from '../assets/images/photo1.jpeg';

const AddPost = () => (
  <>
    <Layout>
      <h1>Añadir Publicación</h1>
      <section className="homeDescriptions">
        <h2>Ubicación</h2>
        <ButtonMenu />
        <ButtonMenu />
        <ButtonMenu />
        <ButtonMenu />
        <ButtonMenu />
        <ButtonMenu />
        <ButtonMenu />
        <ButtonMenu />
        <ButtonMenu />
        <ButtonMenu />
      </section>
      <section className="homeDescriptions">
        <h2>Datos de tu Propiedad</h2>
        <ButtonMenu />
        <ButtonMenu />
        <ButtonMenu />
        <ButtonMenu />
        <ButtonMenu />
        <ButtonMenu />
        <ButtonMenu />
        <ButtonMenu />
        <ButtonMenu />
        <ButtonMenu />
      </section>
      <section className="descriptionText">
        <h2>Descripción</h2>
        <form className="description" action="">
          <input type="text" id="description" name="description" />
        </form>
      </section>
      <Button text='Guardar Cambios' onClick={() => console.log('a trabajar')} />
      <section className="gallery">
        <h2>Galería</h2>
        <div className="galleryImages">
          <img src={image} alt=""/>
          <img src={image} alt=""/>
          <img src={image} alt=""/>
        </div>
      </section>
      <div className="galleryButtons">
        <Button text='Agregar Imágen' onClick={() => console.log('a trabajar')} />
        <Button text='Borrar Imágen' onClick={() => console.log('a trabajar')} />
      </div>
    </Layout>
  </>
);

export default AddPost;
