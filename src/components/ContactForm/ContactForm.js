import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/phonebook';
import { v4 as uuidv4 } from 'uuid';
import s from './ContactForm.module.scss';

//done

function ContactForm() {
  const dispatch = useDispatch();
  const [id, setId] = useState();

  const [name, setName] = useState('');

  const [number, setNumber] = useState('');

  const handleChange = useCallback(e => {
    setName(e.target.value);
    setNumber(e.target.value);
    setId(uuidv4());
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      if (name && number) {
        dispatch(addContact(id, name, number));

        resetForm();
      }
    },
    [dispatch, id, name, number],
  );

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={s.FormContainer}>
      <form onSubmit={handleSubmit}>
        <label>
          <p className={s.InputTitle}>Name</p>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter name"
            onChange={handleChange}
            className={s.InputField}
          ></input>
        </label>
        <label>
          <p className={s.InputTitle}>Phone number</p>
          <input
            type="tel"
            name="number"
            value={number}
            placeholder="Enter phone number"
            onChange={handleChange}
            className={s.InputField}
          ></input>
        </label>

        <button type="submit" className={s.InputButton}>
          Add contact
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
