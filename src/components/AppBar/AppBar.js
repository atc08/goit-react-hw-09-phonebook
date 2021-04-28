import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { getIsAuthenticated } from '../../redux/auth';
import s from './AppBar.module.scss';

//done

function AppBar() {
  const isLoggedIn = useSelector(getIsAuthenticated);
  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

export default AppBar;
