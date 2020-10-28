import React from 'react';
import Filter from './Filter';
import Button from './Button';
import '../assets/styles/components/Search.scss';

const Search = () => (
  <section className='Search'>
    <div className='Search__Filter'>
      <Filter text='Compra o Venta' />
      <Filter text='Tipo de Propiedad' />
      <Filter text='Rango de Precio' />
      <Filter text='Precio' />
    </div>
    <div className='Search__Filter'>
      <Filter text='País' />
      <Filter text='Estado o Departamento' />
      <Filter text='Ciudad' />
      <Filter text='Barrio o Colonia' />
    </div>
    <Button text='Buscar' />
  </section>

);

export default Search;
