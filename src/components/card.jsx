import React from 'react';
<<<<<<< HEAD
import '../assets/styles/card.scss';
import card from '../assets/images/hotel1.jpg';
import heart from '../assets/images/corazon.png';
import bed from '../assets/images/cama.png';
import bathroom from '../assets/images/bañera.png';
import area from '../assets/images/metros.png';

const Card = ({ title }) => {
  return (
    <section className='card'>
      <img src={card} className='card__image' alt='Imagen de la Card' />
      <div className='card__body'>
        <h2 className='card__body--title'>{title}</h2>
        <img src={heart} className='card__body--heart' alt='Heart icon' />
      </div>
      <div className='card__footer'>
        <img src={bed} className='card__footer--bed' alt='beds' />
        <img src={bathroom} className='card__footer--bathroom' alt='bathroom' />
        <img src={area} className='card__footer--area' alt='area' />
      </div>
    </section>
  );
};

export default Card;
=======
import '../styles/card.css';

const Card = () => {
    return (
        <section className="card-container">
<article className="c-card">
    <header className="c-card__header">
        <img src="./img/hotel1.jpg" className="c-card__image" alt="Imagen de la Card" />
        
    </header>
    <div className="c-card__body">
        <h2 className="c-card__title">
            <p>Hotel Chevere</p>
            <img src="../img/corazon.png" className="c-card__corazon" alt="corazon" />
        </h2>
    </div>
    
    
    <footer className="c-card__footer">
        <img src="../img/cama.png" className="c-card__cama" alt="Recamaras" />
        <img src="../img/bañera.png" className="c-card__bañera" alt="Baños" />
        <img src="../img/metros.png" className="c-card__metros" alt="metros cuadrados" />

    </footer>
</article>
</section>
    )
}
>>>>>>> 8d744bc11714ec9036555670b2a3b98793c178ba
