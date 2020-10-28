import React from 'react';
import '../assets/styles/components/Description.scss';

const Description = ({ text }) => {
  return (
    <div className='Description'>
      <h4 className='Description__Title'> Description </h4>
      <hr className='Description__Line' />
      <p className='Description__Paragraph'>{text}</p>
    </div>
  );
};

export default Description;
