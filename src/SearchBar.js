function SearchBar({searchInput,setSearchInput}){

const handleChange=(e)=>{
    e.preventDefault();
    setSearchInput(e.target.value);
};

return (
   
<input
   type="text"
   placeholder="Search for a country..."
   onChange={handleChange}
   value={searchInput} />
   
   );
};
export default SearchBar;