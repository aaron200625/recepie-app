import React, { useState, useEffect } from 'react';
import RecepieApp from '../components/RecepieApp';
import '../css/home.css'

const Home = () => {
  const recepies = [
    { id: 1, title: "Recepie", description: "My Recepie" },
    { id: 2, title: "DONUT", description: "Fried Dough" },
    { id: 3, title: "BREAD", description: "Baked Flour" }
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [recepie, setRecepie] = useState([]);

   const handleSearch = async (e) => {
  e.preventDefault();
  alert();
   }
  return (

       <div className='Home'>
            <form onSubmit={handleSearch} className='search-form'>
                <input type="text"
                    placeholder='Search for Recepie...'
                    className='search-input'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type='submit' className='search-button'>Search</button>
            </form>

      <div className='recepie-grid'>
        {recepies.map((recepie) =>
        (recepie.title.toLowerCase().startsWith(searchQuery)) && (
          <RecepieApp recepie={recepie} key={recepie.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
