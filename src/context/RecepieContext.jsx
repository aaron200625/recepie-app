import React, { createContext, useContext, useEffect, useState } from "react";

const RecepieContext = createContext();

export const useRecepieContext = () => useContext(RecepieContext);

export const RecepieProvider = ({ children }) => {
   const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : []; 
  });


  useEffect(() => {
    const storedFavs = localStorage.getItem("favourites");
    if (storedFavs) setFavourites(JSON.parse(storedFavs));
  }, []);


  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourites = (recipe) => {
    setFavourites((prev) => [...prev, recipe]);
  };


  const removeFromFavourites = (recipeID) => {
    setFavourites((prev) =>
      prev.filter((recipe) => recipe.idMeal !== recipeID)
    );
  };


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
