import React from "react";

function RegionFilter({ onSelect, DarkMode }) {
  function handleChange(event) {
    onSelect(event.target.value);
  }

  return (
    <select
      className={` ${DarkMode ? "dark" : ""}`}
      name="region"
      defaultValue=""
      onChange={handleChange}
    >
      <option value="" key="default">
        Filter by Region:
      </option>
      <option value="Africa" key="africa">
        Africa
      </option>
      <option value="Americas" key="americas">
        Americas
      </option>
      <option value="Asia" key="asia">
        Asia
      </option>
      <option value="Europe" key="europe">
        Europe
      </option>
      <option value="Oceania" key="oceania">
        Oceania
      </option>
    </select>
  );
}

export default RegionFilter;
