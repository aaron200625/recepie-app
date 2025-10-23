import React from 'react'
import { useState, useEffect } from 'react';
import '../css/recepie.css'
import bugerImg from '../assets/images.jpg'
import Favourites from '../pages/Favourites';

const RecepieApp = ({ recepie }) => {
  

  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

   const [isVisible, setIsVisible] = useState(false);
  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div className='recepie-card'>
    <div className='recepie-postrer'>
      <div className='recepie-overlay'>
           <button
      onClick={handleToggleFavorite}
      className={`favorite-btn ${isFavorite ? 'active' : ''}`}
    > {isFavorite ? '❤' : '🤍'}
</button>
          </div>
        <img src={bugerImg} alt="buger" />
        </div>
          <div className='recepie-info'>
        <h2>{recepie.title}</h2>
        <p>{recepie.description}</p>
        <button onClick={handleToggleVisibility} id="toggle-button">
  {isVisible ? 'Hide Ingredients' : 'Show Ingredients'}
</button>
{isVisible && <div className='ingredients'><p>1 cup of sugar
        3poola</p></div>}
        </div>
      

    </div>
  );
}

export default RecepieApp