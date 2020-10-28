import React from 'react';
import Cover from '../components/Cover';
import Information from '../components/Information';
import Search from '../components/Search';
import Footer from '../components/Footer';
import SimilarListings from '../components/SimilarListings';

const Home = () => (
  <>
    <Cover />
    <Search />
    <SimilarListings />
    <Information title='Trabaja con nosotros' />
    <Footer title='Haz tus sueños una realidad' />
  </>
);

export default Home;
