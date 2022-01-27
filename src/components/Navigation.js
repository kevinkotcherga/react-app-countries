import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='navigation'>
      <nav>
        <ul>
          <NavLink to="/"
          className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/a-propos"
          className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>A propos</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
