import './App.css';
import React ,{useState, useEffect} from "react"
import CountriesCards from './CoutriesCards';
import data from "./data.json"
import RegionFilter from './RegionFilter';
import SearchBar from './SearchBar';


function App() {
  const [region,setRegion]=useState("");
  console.log(region);
  const [searchInput,setSearchInput]=useState("")
  const[FilteredCountries,setFilteredCountries]=useState(data);

  
  useEffect(()=>{
    let filtered = data;

    if (region){
    filtered=filtered.filter((country)=>country.region ===region)
    setFilteredCountries(filtered);
    }
    if (searchInput){
      filtered=filtered.filter((country)=>country.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    }
      setFilteredCountries(filtered);
  
  },[region,searchInput]);

  return (
    <div className="App">
    <header className="header-container">
      <h1>Where is the world?</h1>
    </header>
    <div className="search-select">
    <RegionFilter onSelect={(region)=>setRegion(region)}/>
    <SearchBar className="search-input" searchInput={searchInput} setSearchInput={setSearchInput}/>
    </div>
    <CountriesCards allCountries={FilteredCountries}/>
    </div>
  );
}

export default App;
