import React from "react";

function CountriesCards({ allCountries, darkMode }) {
  const sortedCountries = allCountries.sort((a, b) => {
    const nameA = a.name.common.toLowerCase();
    const nameB = b.name.common.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  return (
    <div className={`grid-container ${darkMode ? "dark" : ""}`}>
      {sortedCountries.map((country, index) => (
        <div
          key={index}
          className={`card w-full shadow p-3 mb-5 rounded ${
            darkMode ? "dark" : ""
          }`}
          style={{
            marginBottom: darkMode ? "2rem" : "2rem",
            height: "350px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src={country.flags.svg}
              alt={`${country.name.common} flag`}
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <div
            style={{
              lineHeight: "1em",
              textAlign: "left",
              fontSize: "14px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <h3>{country.name.common}</h3>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CountriesCards;
