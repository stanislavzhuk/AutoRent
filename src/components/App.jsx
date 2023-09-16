import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'));
const CarsCatalog = lazy(() => import('../pages/CarsCatalog/CarsCatalog'));
const Favorite = lazy(() => import('../pages/Favorite/Favorite'));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<CarsCatalog />} />
          <Route path="favorites" element={<Favorite />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
