import React from "react";

function SearchBar({ searchInput, setSearchInput, darkMode }) {
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <input
      className={`input ${darkMode ? "dark" : ""}`}
      type="text"
      placeholder="Search for a country..."
      onChange={handleChange}
      value={searchInput}
    />
  );
}

export default SearchBar;
