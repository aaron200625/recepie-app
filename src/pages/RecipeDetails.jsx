import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/details.css"

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  const fetchDetails = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      setRecipe(data.meals ? data.meals[0] : null);
    } catch (err) {
      console.error("Failed to fetch details:", err);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="recipe-details">
      <h1>{recipe.strMeal}</h1>
      <img 
        src={recipe.strMealThumb} 
        alt={recipe.strMeal} 
        className="details-img"
      />

      <h2>Ingredients</h2>
      <ul>
        {Array.from({ length: 20 }).map((_, i) => {
          const ingredient = recipe[`strIngredient${i + 1}`];
          const measure = recipe[`strMeasure${i + 1}`];
          if (ingredient && ingredient.trim() !== "") {
            return <li key={i}>{ingredient} - {measure}</li>;
          }
          return null;
        })}
      </ul>

     
      <h2>Instructions</h2>
      <ul>
        {recipe.strInstructions
          .split(/[\r\n]+|(?<=\.)\s+/)
          .map((step, index) => {
            const clean = step.trim();
            if (!clean) return null;
            return <li key={index}>{clean}</li>;
          })}
      </ul>

      
    </div>
  );
};

export default RecipeDetails;
