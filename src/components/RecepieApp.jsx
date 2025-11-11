import React, { useState } from "react";
import "../css/recepie.css";
import { useRecepieContext } from "../context/RecepieContext"; 

const RecepieApp = ({ recipe }) => {

  const { isFavourite, addToFavourites, removeFromFavourites } = useRecepieContext();
  const favourite = isFavourite(recipe.idMeal);

  
  const onFavouriteClick = (e) => {
    e.preventDefault();
    if (favourite) removeFromFavourites(recipe.idMeal);
    else addToFavourites(recipe);
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="recepie-card">
      <div className="recepie-poster">
        <div className="recepie-overlay">
       
          <button
            className={`favorite-btn ${favourite ? "active" : ""}`}
            onClick={onFavouriteClick}
          >
             ❤
          </button>
        </div>

     
        <img
          src={recipe.strMealThumb || "https://via.placeholder.com/300x200?text=No+Image"}
          alt={recipe.strMeal}
          className="recipe-image"
        />
      </div>

      <div className="recepie-info">
        <h2>{recipe.strMeal}</h2>

     
        <button onClick={handleToggleVisibility} id="toggle-button">
          {isVisible ? "Hide Recepie" : "Show Recepie"}
        </button>

      
        {isVisible && (
          <div className="ingredients">
            <h3>Ingredients</h3>
            <ul>
              {Array.from({ length: 20 }).map((_, i) => {
                const ingredient = recipe[`strIngredient${i + 1}`];
                const measure = recipe[`strMeasure${i + 1}`];
                if (ingredient && ingredient.trim() !== "") {
                  return (
                    <li key={i}>
                      {ingredient} - {measure}
                    </li>
                  );
                }
                return null;
                
              })}
            </ul>
            {recipe.strInstructions && (
      <div className="instructions">
        <h3>Instructions</h3>
        <ul>
          {recipe.strInstructions
            .split(/[\r\n]+|(?<=\.)\s+/) // split by new lines or full stops
            .map((step, index) => {
              const cleanStep = step.trim();
              if (cleanStep) {
                return <li key={index}>{cleanStep}</li>;
              }
              return null;
            })}
        </ul>
      </div>
    )} 
        
      </div>
   
        
        )}
        
      </div>
    </div>
  );
};

export default RecepieApp;
