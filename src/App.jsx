import { useState } from 'react'
import RecepieApp from './components/RecepieApp'
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  

  return (

      <div>
        <Navbar />
 <main className='main-content'>
     <Routes>
      <Route path='/' element={<  Home />} />
      <Route path='/favourites' element={<div><h2>Favourites Page</h2></div>} />
      </Routes>
 </main>
   </div>
  );
}

export default App
