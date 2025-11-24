import React from "react";
import "../css/recepie.css";
import { useRecepieContext } from "../context/RecepieContext"; 
import { Link } from "react-router-dom";

const RecepieApp = ({ recipe }) => {

  const { isFavourite, addToFavourites, removeFromFavourites } = useRecepieContext();
  const favourite = isFavourite(recipe.idMeal);

  const onFavouriteClick = (e) => {
    e.preventDefault();
    if (favourite) removeFromFavourites(recipe.idMeal);
    else addToFavourites(recipe);
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

        {/* ONLY THIS BUTTON CHANGED */}
        <button id="toggle-button">
          <Link to={`/recipe/${recipe.idMeal}`} style={{ color: "inherit", textDecoration: "none" }}>
            Show Recipe
          </Link>
        </button>

      </div>
    </div>
  );
};

export default RecepieApp;

