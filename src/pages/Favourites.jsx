import React from 'react'
import '../css/favourites.css'
import RecepieApp from '../components/RecepieApp'
import { useRecepieContext } from '../context/RecepieContext'

const Favourites = () => {
  const { favourites } = useRecepieContext();

  if (favourites && favourites.length > 0) {
    return(
       <div className='favorites'>
        <div className='favorites-list'>
          {favourites.map((recipe) => (
            <RecepieApp recipe={recipe} key={recipe.idMeal} />
          ))}
        </div>
      </div>
    );
  }

  return (
     <div className='favorites'>
      <div className='favorites-empty'>
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favourites and they will appear here</p>
      </div>
    </div>
  )
}

export default Favourites