import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth';
import s from './ViewsStyles.module.scss';

function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleChange = useCallback(e => {
    setEmail(e.target.value);
    setPassword(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      if (!email || !password) {
        alert('Please fill this form');
      }

      dispatch(logIn(email, password));

      resetForm();
    },
    [dispatch, email, password],
  );

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>LogIn Page</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">SignIn</button>
      </form>
    </div>
  );
}

export default LoginView;
