import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import asideIcon from '../../assets/chevron-down.svg';
import css from './Sidebar.module.css';

const Sidebar = ({ isActive, setToggle }) => {
  const menuRef = useRef();

  useEffect(() => {
    const handler = e => {
      if (!menuRef.current.contains(e.target) && e.target.nodeName !== 'IMG')
        setToggle(false);
    };

    if (isActive) document.addEventListener('mousedown', handler);

    return () => document.removeEventListener('mousedown', handler);
  }, [isActive, setToggle]);

  const asideStyle = {
    left: isActive ? '0' : '-100%',
    opacity: isActive ? 1 : 0,
  };

  return (
    <>
      <div onClick={() => setToggle(prev => !prev)}>
        <img
          src={asideIcon}
          alt="Sidebar Icon"
          className={`${css.openSidebarBtn} ${isActive && css.closeSidebarBtn}`}
        />
      </div>
      <aside
        style={asideStyle}
        className={css.aside}
        id="sidebar"
        ref={menuRef}
      >
        <nav className={css.navBar}>
          <NavLink className="button-primary" to="/">
            Home
          </NavLink>
          <NavLink className="button-primary" to="/catalog">
            Catalog
          </NavLink>
          <NavLink className="button-primary" to="/favorites">
            Favorites
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
