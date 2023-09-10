import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import CarsCatalog from 'pages/CarsCatalog/CarsCatalog';
import Favorite from 'pages/Favorite/Favorite';
import NotFound from 'pages/NotFound/NotFound';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalog" element={<CarsCatalog />} />
        <Route path="favorites" element={<Favorite />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
