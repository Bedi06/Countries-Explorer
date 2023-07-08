

function CountriesCards ({allCountries}){
  
  return (
    <div className="grid-container">
    {allCountries.map((country,index)=>(
      <div key={index} className="card" style={{width: "18rem"}}>
         {/* <img src={countries.flag} alt="countries-flag" className="card-img-top" /> */}
         <h3>{country.name}</h3>
         <p>Population:{country.population}</p>
         <p>Region:{country.region}</p>
         <p>Capital:{country.capital}</p>
      </div>    
     
  ))}
  </div>
  );
  
}

export default CountriesCards;