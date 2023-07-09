

function CountriesCards ({allCountries,DarkMode}){
  
  return (
    <div className="grid-container">
    {allCountries.map((country,index)=>(
      <div key={index} className="card"style={{width: "18rem" ,paddingLeft:"2rem"}}>
         <img src={country.flag} alt="countries-flag" />
         
         <h3 >{country.name}</h3>
         <div style={{lineHeight:"1em"}}>
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