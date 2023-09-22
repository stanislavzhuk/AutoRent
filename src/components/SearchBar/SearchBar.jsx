import { useEffect, useState } from 'react';
import { brandOptions } from 'data/makes';
import { priceOptions } from 'data/prices';
import css from './SearchBar.module.css';

import Select from 'react-select';
import { carMenuStyles, priceStyles } from './SelectStyles';

const SearchBar = ({ onSearch }) => {
  const initialData = {
    make: null,
    rentalPrice: null,
    millageFrom: '',
    millageTo: '',
  };

  const [data, setData] = useState(initialData);

  useEffect(() => {
    handleReset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleReset = () => {
    setData(initialData);
    onSearch(initialData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(data);
  };

  return (
    <form className={css.form}>
      <label className={css.label}>
        Car brand
        <Select
          options={brandOptions}
          isSearchable={true}
          styles={carMenuStyles}
          closeMenuOnSelect={false}
          placeholder="Enter the text"
          onChange={e => handleChange('make', e.value)}
          value={data.make === "" ? "" : { value: data.make, label: data.make }}
        />
      </label>
      <label className={css.label}>
        Price / 1 hour
        <Select
          options={priceOptions}
          isSearchable={true}
          styles={priceStyles}
          closeMenuOnSelect={false}
          placeholder={'To'}
          onChange={e => handleChange('rentalPrice', e.value)}
          value={data.rentalPrice === "" ? "" : { value: data.rentalPrice, label: data.rentalPrice }}
        />
      </label>
      <label className={css.label}>
        Car mileage / km
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
        onClick={handleSubmit}
      >
        Search
      </button>
      <button
        type="button"
        className="button-primary button-search"
        onClick={handleReset}
      >
        Reset
      </button>
    </form>
  );
};

export default SearchBar;
