import React from 'react';

import Cover from '../components/Cover';
import Information from '../components/Information';
import Search from '../components/Search';
import Card from '../components/Card';

const Home = () => (

  <>
    <Cover />
    <Search />
    <Card title='Hotel Luxury' />
    <Information title='Trabaja con nosotros' />
  </>
);

export default Home;
