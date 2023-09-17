import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from 'components/Sidebar/Sidebar';
import Loader from 'components/Loader/Loader';
import css from './Layout.module.css';

const Layout = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <div className={css.layout}>
      <Sidebar isActive={isSidebarVisible} setToggle={setIsSidebarVisible} />
      <main className={css.main}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
