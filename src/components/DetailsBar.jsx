import React from 'react';
import bath from '../assets/images/bath.png';
import bed from '../assets/images/bed.png';
import couch from '../assets/images/couch.png';
import dinningroom from '../assets/images/dinningroom.png';
import garden from '../assets/images/garden.png';
import garage from '../assets/images/garage.png';
import lookup from '../assets/images/lookup.png';
import meter2 from '../assets/images/meters.png';
import pet from '../assets/images/pet.png';
import SingleDetail from './SingleDetail';
import '../assets/styles/components/DetailsBar.scss';

const DetailsBar = ({ meter, beds, baths }) => {
  return (
    <section className='Details'>
      <div className='Details--Title'>
        <h4>Detalles</h4>
      </div>
      <SingleDetail foto={meter2} titulo='1' />
      <SingleDetail foto={bed} titulo='1' />
      <SingleDetail foto={bath} titulo='1' />
      <SingleDetail foto={pet} titulo='1' />
      <SingleDetail foto={couch} titulo='1' />
      <SingleDetail foto={dinningroom} titulo='1' />
      <SingleDetail foto={garage} titulo='1' />
      <SingleDetail foto={lookup} titulo='1' />
      <SingleDetail foto={garden} titulo='1' />
      <SingleDetail foto={meter2} titulo='1' />
    </section>
  );
};

export default DetailsBar;
