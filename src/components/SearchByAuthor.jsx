import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { debounce } from '../utils/utilities';

const SearchContainer = styled.header`
  max-width: var(--main-width);
  margin: auto auto;
  padding: 0.5rem 0;
`;

const SearchInput = styled.input`
  font-size: 1.2rem;
  height: 2rem;
  background-color: var(--feed-item-bg);
`;

const SearchLabel = styled.label`
  display: none;
`;

const SearchByAuthor = ({ queryByAuthor }) => {
  const [query, setQuery] = useState();
  const debounceQuery = debounce((evt) => captureQuery(evt));

  const captureQuery = (event) => {
    setQuery(event.target.value);
  }

  useEffect(() => {
    if (query !== null || query !== undefined) {
      queryByAuthor(query);
    }
  }, [queryByAuthor, query]);

  return (
    <SearchContainer>
      <SearchInput 
        type='text' 
        placeholder='Filter by Author Name' 
        defaultValue={query}
        onChange={debounceQuery}
        name='queryForAuthor'
        id='queryForAuthor'
      />
      <SearchLabel for='queryForAuthor'>Search for an author by name</SearchLabel>
    </SearchContainer>
  );
};

SearchByAuthor.propTypes = {
  queryByAuthor: PropTypes.func.isRequired
};

export default SearchByAuthor;