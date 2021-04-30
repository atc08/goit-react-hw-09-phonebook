import React from 'react';
import s from './ContactList.module.scss';
import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <p className={s.ContactListItemText}>
        {name}: {number}
      </p>
      <button
        type="button"
        onClick={() => onDeleteContact(id)}
        className={s.ContactListItemButton}
      >
        Delete
      </button>
    </>
  );
};

ContactListItem.propTypes = {
  ondeleteContact: PropTypes.func,
};

export default ContactListItem;
