import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserName, logOut } from '../../redux/auth';
import s from './UserMenu.module.scss';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  const onLogout = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <span className={s.name}>Welcome, {name}</span>
      <button type="button" onClick={onLogout}>
        LogOut
      </button>
    </div>
  );
}

export default UserMenu;
