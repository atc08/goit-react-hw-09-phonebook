import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, getFilter } from '../../redux/phonebook';
import PropTypes from 'prop-types';
import s from './Filter.module.scss';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = e => dispatch(changeFilter(e.target.value));

  return (
    <label>
      <p className={s.FilterText}>Find contacts by name :</p>
      <input
        type="text"
        value={filter}
        onChange={onChangeFilter}
        placeholder="Enter name for search"
        className={s.FilterInput}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onchangeFilter: PropTypes.func,
};

export default Filter;
