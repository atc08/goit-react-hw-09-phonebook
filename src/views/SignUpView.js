import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../redux/auth';
import s from './ViewsStyles.module.scss';

function SignUpView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = useCallback(e => {
    setName(e.target.value);
    setEmail(e.target.value);
    setPassword(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      if (!name || !email || !password) {
        alert('Please fill this form');
        return;
      }

      dispatch(signUp(name, email, password));

      resetForm();
    },
    [dispatch, name, email, password],
  );

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>SignUp Page</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

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

        <button type="submit">SignUp</button>
      </form>
    </div>
  );
}

export default SignUpView;
