import React, { useState } from "react";


const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    
    props.search(searchValue);
    resetInputField();
  }

  return (
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
          placeholder="Enter a movie name"
          name="SearchBar"
        />
        <input onClick={callSearchFunction} type="submit" value="Fetch" disabled={!searchValue}/>
      </form>
    );
}

export default Search;