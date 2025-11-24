import React, { useState, useEffect } from "react";
import RecepieApp from "../components/RecepieApp";
import "../css/home.css";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRecipes = async (query) => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );

      const data = await response.json();

      
      setRecipes(data.meals || []);
    } catch (err) {
      setError("Could not load recipes.");
    } finally {
      setLoading(false);
    }
  };

 
  useEffect(() => {
    fetchRecipes("");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchQuery.trim() === "") {
      setError("Search cannot be empty");
      return;
    }

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
        <button type="submit" className="search-button">Search</button>
      </form>

    
      {loading && <p className="loading">Loading recipes...</p>}

     
      {error && !loading && <p className="error">{error}</p>}

     
      {!loading && recipes.length === 0 && (
        <p className="no-results">No recipes found</p>
      )}

  
      <div className="recepie-grid">
        {recipes.map((recipe) => (
          <RecepieApp recipe={recipe} key={recipe.idMeal} />
        ))}
      </div>
    </div>
  );
};

export default Home;
