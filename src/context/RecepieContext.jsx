import React, { createContext, useContext, useEffect, useState } from "react";

const RecepieContext = createContext();

export const useRecepieContext = () => useContext(RecepieContext);

export const RecepieProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  // ✅ Load favourites from localStorage when app starts
  useEffect(() => {
    const storedFavs = localStorage.getItem("favourites");
    if (storedFavs) setFavourites(JSON.parse(storedFavs));
  }, []);

  // ✅ Save favourites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  // ✅ Add recipe to favourites
  const addToFavourites = (recipe) => {
    setFavourites((prev) => [...prev, recipe]);
  };

  // ✅ Remove recipe from favourites
  const removeFromFavourites = (recipeID) => {
    setFavourites((prev) =>
      prev.filter((recipe) => recipe.idMeal !== recipeID)
    );
  };

  // ✅ Check if recipe is favourite
  const isFavourite = (recipeID) => {
    return favourites.some((recipe) => recipe.idMeal === recipeID);
  };

  const value = {
    favourites,
    addToFavourites,
    removeFromFavourites,
    isFavourite,
  };

  return (
    <RecepieContext.Provider value={value}>
      {children}
    </RecepieContext.Provider>
  );
};
