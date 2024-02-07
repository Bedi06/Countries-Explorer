import React from "react";

function SearchBar({ searchInput, setSearchInput, DarkMode }) {
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <input
      className={` ${DarkMode ? "dark" : ""}`}
      type="text"
      placeholder="Search for a country..."
      onChange={handleChange}
      value={searchInput}
    />
  );
}

export default SearchBar;
