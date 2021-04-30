import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getAllContacts } from '../../redux/phonebook';
import s from './ContactForm.module.scss';

function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const [number, setNumber] = useState('');

  const contacts = useSelector(getAllContacts);

  const handleChange = useCallback(e => {
    setName(e.target.value);
    setNumber(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      if (contacts.some(elm => elm.name.toLowerCase() === name.toLowerCase())) {
        return alert(`${name} is already in contacts`);
      }
      if (
        contacts.some(elm => elm.number.toLowerCase() === number.toLowerCase())
      ) {
        return alert(`${number} is already in contacts`);
      }

      if (name && number) {
        dispatch(addContact(name, number));

        resetForm();
      }
    },
    [dispatch, contacts, name, number],
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
