import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactListItem from './ContactListItem';
import { deleteContact, getFilteredContact } from '../../redux/phonebook';
import s from './ContactList.module.scss';
import PropTypes from 'prop-types';

function ContactList() {
  const contacts = useSelector(getFilteredContact);

  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));

  if (contacts.length === 0) return null;

  return (
    <ul className={s.ContactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.ContactListItem}>
          <ContactListItem
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  ondeleteContact: PropTypes.func,
};

export default ContactList;
