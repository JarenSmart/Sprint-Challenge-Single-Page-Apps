import React, { useEffect, useState } from "react";

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const changeHandler = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const searchedData = props.characters.filter(filteredCharacters =>
      filteredCharacters.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(searchedData);
  }, [searchTerm]);

  return (
    <section className="search-form">
      // Add a search form here
      <input
        onChange={changeHandler}
        type="text"
        value={searchTerm}
        placeholder="Search"
      ></input>
      <ul>
        {searchResults.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </section>
  );
}
