import React, { useState } from 'react';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    // Perform search or other actions with the search text
    console.log('Search Text:', searchText);
  };

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={handleInputChange}
        className={styles.searchInput}
      />
      <button onClick={handleSearch} className={styles.searchButton}>Search</button>
    </div>
  );
};

export default SearchBox;
