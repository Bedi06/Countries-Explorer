function SearchBar({searchInput,setSearchInput}){

const handleChange=(e)=>{
    e.preventDefault();
    setSearchInput(e.target.value);
};

return (
   
<input
className="input"
   type="text"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />
   
   );
};
export default SearchBar;