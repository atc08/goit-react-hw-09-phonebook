import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Navigation.module.scss';
import { getIsAuthenticated } from '../../redux/auth';

function Navigation() {
  const isLoggedIn = useSelector(getIsAuthenticated);

  return (
    <nav>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Main
      </NavLink>

      {isLoggedIn && (
        <NavLink
          exact
          to="/contacts"
          className={s.link}
          activeClassName={s.activeLink}
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
