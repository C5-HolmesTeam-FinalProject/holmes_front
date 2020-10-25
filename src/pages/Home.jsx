import React from 'react';

import Cover from '../components/Cover';
import Information from '../components/Information';
import Search from '../components/Search';
import Card from '../components/Card';

const Home = () => (

  <>
    <Cover />
    <Search />
    <Information title='Trabaja con nosotros' />
    <Card title='Hotel Luxury' />
  </>
);

export default Home;
