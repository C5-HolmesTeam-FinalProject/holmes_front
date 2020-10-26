import React from 'react';

import Layout from '../components/Layout';
import ButtonMenu from '../components/ButtonMenu';

import '../assets/styles/AddPost.scss'

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
    </Layout>
  </>
);

export default AddPost;
