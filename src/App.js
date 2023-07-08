import './App.css';
import React ,{useState} from "react"
import CountriesCards from './CoutriesCards';
import data from "./data.json"
import RegionFilter from './RegionFilter';


function App() {
  const [region,setRegion]=useState("");
  console.log(region);
  
const FilteredCountries=data.filter((country)=>country.region ===region)

  return (
    <div className="App">
    <header>
      <h1>Where is the world?</h1>
      <RegionFilter onSelect={(region)=>setRegion(region)}/>
      <CountriesCards allCountries={FilteredCountries}/>
    </header>
    </div>
  );
}

export default App;
