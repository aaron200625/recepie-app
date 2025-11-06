import React, { useState } from "react";
import "../css/recepie.css";
import { useRecepieContext } from "../context/RecepieContext"; // ✅ make sure this file exists

const RecepieApp = ({ recipe }) => {
  // ✅ correctly call context
  const { isFavourite, addToFavourites, removeFromFavourites } = useRecepieContext();
  const favourite = isFavourite(recipe.idMeal);

  // ✅ fixed recipe reference (you wrote 'movie' before)
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
          {/* ❤️ Heart button */}
          <button
            className={`favorite-btn ${favourite ? "active" : ""}`}
            onClick={onFavouriteClick}
          >
            ❤
          </button>
        </div>

        {/* ✅ Image fallback if missing */}
        <img
          src={recipe.strMealThumb || "https://via.placeholder.com/300x200?text=No+Image"}
          alt={recipe.strMeal}
          className="recipe-image"
        />
      </div>

      <div className="recepie-info">
        <h2>{recipe.strMeal}</h2>

        {/* ✅ Show/Hide Ingredients Button */}
        <button onClick={handleToggleVisibility} id="toggle-button">
          {isVisible ? "Hide Ingredients" : "Show Ingredients"}
        </button>

        {/* ✅ Ingredients list */}
        {isVisible && (
          <div className="ingredients">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default RecepieApp;
