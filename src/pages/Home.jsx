import React, { useState, useEffect } from "react";
import RecepieApp from "../components/RecepieApp";
import "../css/home.css";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchRecipes = async (query) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await response.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchRecipes(searchQuery);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes(searchQuery);
  };

  return (
    <div className="Home">
    
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a recipe..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

  <div className="recepie-grid">
        {recipes.map((recipe) => (
          <RecepieApp recipe={recipe} key={recipe.idMeal} />
        ))}
      </div>
    </div>
  );
};

export default Home;
