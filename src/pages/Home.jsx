import React from 'react';
import Cover from '../components/Cover';
import Information from '../components/Information';
import Search from '../components/Search';
import Card from '../components/card';
import Footer from '../components/Footer';

const Home = () => (
  <>
    <Cover />
    <Search />
    <Information title='Trabaja con nosotros' />
    <Card title='Hotel Luxury' />
    <Footer title='Haz tus sueños una realidad' />
  </>
);

export default Home;
