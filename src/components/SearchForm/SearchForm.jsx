import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PropTypes from 'prop-types';
import { Button, Input } from './SearchForm.styled';
import { Box } from 'components/App.styled';

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
    <Box>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleInputChange}
        />
        <Button type="submit">
          <span>Search</span>
        </Button>
      </form>
    </Box>
  );
};

SearchForm.protoType = {
  onSubmit: PropTypes.func,
};

export default SearchForm;
