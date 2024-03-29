import { useState } from 'react';
import css from './SearchForm.module.css';

const SearchForm = ({ onHandleSubmit }) => {
  const [query, setQuery] = useState('');
  const handleChange = event => {
    setQuery(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (!query.trim()) {
      return alert('Cannot be empty');
    }
    onHandleSubmit(query);
  };
  return (
    <form className={css.form} onSubmit={handleSubmit} action="">
      <input
        className={css.formInput}
        type="text"
        value={query}
        name="query"
        onChange={handleChange}
      />
      <button className={css.formButton} type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
