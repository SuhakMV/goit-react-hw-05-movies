import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PropTypes from 'prop-types';

const SearchForm = props => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter text in the search bar!');
      return;
    }

    props.onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
  );
};

SearchForm.protoType = {
  onSubmit: PropTypes.func,
};

export default SearchForm;