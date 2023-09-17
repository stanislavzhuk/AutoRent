import { useState } from 'react';
import makes from '../../data/makes.json';
import prices from '../../data/prices.json';
import css from './SearchBar.module.css';

import Select from 'react-select';
import { carMenuStyles, priceStyles } from './SelectStyles';

const SearchBar = ({ onSearch }) => {
  const [data, setData] = useState({
    make: null,
    rentalPrice: null,
    millageFrom: '',
    millageTo: '',
  });

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <form className={css.form}>
      <label className={css.label}>
        Car brand
        <Select
          options={makes}
          isSearchable={true}
          styles={carMenuStyles}
          closeMenuOnSelect={false}
          placeholder="Enter the text"
          onChange={e => handleChange('make', e.value)}
        />
      </label>
      <label className={css.label}>
        Price/ 1 hour
        <Select
          options={prices}
          isSearchable={true}
          styles={priceStyles}
          closeMenuOnSelect={false}
          placeholder={'To'}
          onChange={e => handleChange('rentalPrice', e.value)}
        />
      </label>
      <label className={css.label}>
        Сar mileage / km
        <div className={css.rangeInputs}>
          <input
            type="text"
            name="millageFrom"
            placeholder="From"
            value={data.millageFrom}
            onChange={e => handleChange('millageFrom', e.target.value)}
          />
          <input
            type="text"
            name="millageTo"
            placeholder="To"
            value={data.millageTo}
            onChange={e => handleChange('millageTo', e.target.value)}
          />
        </div>
      </label>
      <button
        type="submit"
        className="button-primary button-search"
        onClick={e => {
          e.preventDefault();
          onSearch(data);
        }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
