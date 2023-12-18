function CountriesCards({ allCountries, DarkMode }) {
  return (
    <div className={`grid-container ${DarkMode ? "dark" : ""}`}>
      {allCountries.map((country, index) => (
        <div
          key={index}
          className={`card w-full ${DarkMode ? "dark" : ""}`}
          style={{ marginBottom: DarkMode ? "2rem" : "2rem" }}
        >
          <img src={country.flag} alt="countries-flag" />

          <h3>{country.name}</h3>
          <div style={{ lineHeight: "1em" }}>
            <p>Population:{country.population}</p>
            <p>Region:{country.region}</p>
            <p>Capital:{country.capital}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CountriesCards;
