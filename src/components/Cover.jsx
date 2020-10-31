import React from 'react';
import '../assets/styles/components/Cover.scss';
import Header from './Header';

const Cover = () => (
  <section className='Cover'>
    <Header />
    <p className='Cover-Title'>
      Encuentra tu casa o
      <br />
      {' '}
      apartamento ideal
      <br />
      {' '}
      Ahora!
    </p>

  </section>
);

export default Cover;
