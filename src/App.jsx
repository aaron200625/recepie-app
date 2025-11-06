import { useState } from 'react'
import RecepieApp from './components/RecepieApp'
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Favourites from './pages/Favourites';
import { RecepieProvider } from './context/RecepieContext';

function App() {
  

  return (

    <RecepieProvider>
      <div>
        <Navbar />
 <main className='main-content'>
     <Routes>
      <Route path='/' element={<  Home />} />
      <Route path='/favourites' element={< Favourites />} />
      </Routes>
 </main>
   </div>
   </RecepieProvider>
  );
}

export default App
