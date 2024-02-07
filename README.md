
**Countries Explorer Web App** 

Welcome to the Countries Explorer web app! This application allows users to explore information about various countries, filter them by region, and toggle between light and dark modes.

**Features**
View a grid of countries with details such as name, flag, population, region, and capital.
Filter countries by region using a dropdown menu.
Search for specific countries by name.
Toggle between light and dark modes for a personalized viewing experience.
Getting Started
To run the web app locally:

Clone the repository:

git clone
Install dependencies:
npm install
Start the development server:
npm start
Open the app in your preferred web browser.

**Components**
App.js
The main component managing state and rendering other components. It includes:

Dark mode toggle.
Region filter.
Search bar.
Display of countries based on applied filters.
CountriesCards.js
A component responsible for rendering country cards. It receives the list of countries and dark mode status as props.

RegionFilter.js
A component for selecting a region to filter countries. It receives the onSelect callback and dark mode status as props.

Usage
Explore countries by scrolling through the grid.
Use the search bar to find specific countries by name.
Filter countries by region using the dropdown menu.
Toggle between light and dark modes for a customized experience.
Contributing
If you'd like to contribute to the development of this web app, feel free to fork the repository and submit pull requests.

Credits
Country data is sourced from the provided data.json.
Flag images are not included in the code and should be retrieved from an external source.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Happy exploring! 🌍🔍
