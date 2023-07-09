import './App.css';
import React ,{useState, useEffect} from "react"
import CountriesCards from './CoutriesCards';
import data from "./data.json"
import RegionFilter from './RegionFilter';
import Header from './Header';
import SearchBar from './SearchBar';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";


library.add(fas);



function App() {
  const [region,setRegion]=useState("");
  const [searchInput,setSearchInput]=useState("")
  const[FilteredCountries,setFilteredCountries]=useState(data);
  const [DarkMode, setDarkMode] = useState(false);


  const handleDarkMode = () => {
    setDarkMode(previousState => !previousState);
  };
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
    <div className={`App ${DarkMode ? "dark" : ""}`}>
    <Header DarkMode={DarkMode} handleDarkMode={handleDarkMode} />
    <div className="search-select">
    <SearchBar className="search-input" searchInput={searchInput} setSearchInput={setSearchInput}/>
    <RegionFilter onSelect={(region)=>setRegion(region)}/>
    </div>
    <CountriesCards allCountries={FilteredCountries} DarkMode={DarkMode}/>
    </div>
  );
}

export default App;
