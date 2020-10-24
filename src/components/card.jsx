import React from 'react';
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