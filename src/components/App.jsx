import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';

const CarsCatalog = lazy(() => import('../pages/CarsCatalog/CarsCatalog'));
const Favorite = lazy(() => import('../pages/Favorite/Favorite'));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalog" element={<CarsCatalog />} />
        <Route path="favorites" element={<Favorite />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
