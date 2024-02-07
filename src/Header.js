import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({ darkMode, handleDarkMode }) {
  return (
    <header className={`header-container ${darkMode ? "dark" : ""}`}>
      <div className="header-elem">
        <h1 className="header-h1">Where in the world?</h1>
        <div className="light-dark">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            checked={darkMode}
            onChange={handleDarkMode}
          />
          <label htmlFor="checkbox" className="checkbox-label">
            <FontAwesomeIcon icon="sun" />
            <FontAwesomeIcon icon="moon" />
            <span className="ball"></span>
          </label>
        </div>
      </div>
    </header>
  );
}
export default Header;
