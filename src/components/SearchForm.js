import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function SearchForm() {
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState("");

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then((res) => {
      const characters = res.data.results.filter((character) =>
        character.name.toLowerCase().includes(searchResults.toLowerCase())
      );

      setData(characters);
    });
  }, [searchResults]);

  const changeHandler = (event) => {
    setSearchResults(event.target.value);
  };

  const SearchBar = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
    align-content: center;
  `;

  const SearchResults = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 20px;
    text-align: center;
  `;

  const SearchedName = styled.h2`
    color: red;
    text-align: center;
  `;

  const CharDataWrapper = styled.div`
    width: auto;
    padding: 5px;
  `;

  const CharData = styled.h3`
    color: black;
  `;

  return (
    <section className="search-form">
      <input
        id="name"
        type="text"
        name="textfield"
        value={searchResults}
        placeholder="Search"
        onChange={changeHandler}
      />

      {data.map((character) => {
        return (
          <SearchBar>
            <SearchResults>
              <img alt="character" src={character.image} />
              <CharDataWrapper>
                <SearchedName>{character.name}</SearchedName>
                <CharData>{character.species}</CharData>
                <CharData>{character.gender}</CharData>
              </CharDataWrapper>
            </SearchResults>
          </SearchBar>
        );
      })}
    </section>
  );
}

export default SearchForm;
