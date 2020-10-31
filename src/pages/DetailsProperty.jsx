import React from 'react';
import Carousel from '../components/Carousel';
import SimilarListings from '../components/SimilarListings';
import DetailBar from '../components/DetailsBar';
import Description from '../components/Description';
import Features from '../components/Features';
import Layout from '../components/Layout';

const DetailsProperty = () => (
  <>
    <Layout>
      <Carousel />
      <DetailBar />
      <Description text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' />
      <Features feature='Sala de Juegos' />
      <SimilarListings />
    </Layout>
  </>
);

export default DetailsProperty;
