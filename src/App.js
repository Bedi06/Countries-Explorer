import "./App.css";
import React, { useState, useEffect } from "react";
import CountriesCards from "./CoutriesCards";
import RegionFilter from "./RegionFilter";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas);

const apiUrl = "https://restcountries.com/v3.1/all";

function App() {
  const [region, setRegion] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [countries, setCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filteredData = [...countries];

    if (region) {
      filteredData = filteredData.filter((country) =>
        country.region.includes(region)
      );
    }
    if (searchInput) {
      filteredData = filteredData.filter((country) =>
        country.name.common.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    setFilteredCountries(filteredData);
  }, [region, searchInput, countries]);

  const handleDarkMode = () => {
    setDarkMode((previousState) => !previousState);
  };

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <Header darkMode={darkMode} handleDarkMode={handleDarkMode} />
      <div className="search-select">
        <SearchBar
          className="search-input"
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          darkMode={darkMode}
        />
        <RegionFilter
          onSelect={(region) => setRegion(region)}
          darkMode={darkMode}
        />
      </div>
      <CountriesCards allCountries={filteredCountries} darkMode={darkMode} />
    </div>
  );
}

export default App;
