import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <aside>
        <ul>
          <li>
            <NavLink to="/" >Home</NavLink>
          </li>
          <li>
            <NavLink to="/catalog" >Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/favorites" >Favorites</NavLink>
          </li>
        </ul>
      </aside>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;