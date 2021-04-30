import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.scss';

const AuthNav = () => (
  <div>
    <NavLink
      exact
      to="/signup"
      className={s.link}
      activeClassName={s.activeLink}
    >
      SignUp
    </NavLink>
    <NavLink
      exact
      to="/login"
      className={s.link}
      activeClassName={s.activeLink}
    >
      LogIn
    </NavLink>
  </div>
);

export default AuthNav;
