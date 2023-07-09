
function RegionFilter ({onSelect}){
    function handleChange(event) {
    onSelect(event.target.value);
    }

    return(
    
    <select name="region" defaultValue="" onChange={handleChange}>
        <option value="" key="default"> Filter by Region: </option>
        <option key="africa">Africa</option>
        <option key="america">America</option>
        <option key="asia">Asia</option>
        <option key="europe">Europe</option>
        <option key="oceania">Oceania</option>
    </select>
  
    )
}

export default RegionFilter;