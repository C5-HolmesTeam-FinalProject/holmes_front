import React from 'react';
import '../assets/styles/components/Cover.scss';
import Header from './Header';
import Animation from 'react-typical';

const Cover = () => (
  <section className='Cover'>
    <Header />
    <p className='Cover-Title'>
      Encuentra tu
      
      <p className="Cover__Title--Animation">
        <Animation
          loop={Infinity}
          wrapper='b'
          steps={[
            'Casa Ideal',
            3000,
            'Rancho Mexicano',
            3000,
            'Hogar Soñado',
            3000,
            'Apartamento Comodo',
            3000,
            'Home',
            3000,
          ]}
        />
      </p>
     
      Ahora!
    </p>

  </section>
);

export default Cover;
