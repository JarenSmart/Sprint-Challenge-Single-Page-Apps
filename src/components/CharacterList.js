import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [searchPage, setSearchPage] = useState([]);

  const search = pageArr => {
    setSearchPage(pageArr);
  };

  useEffect(() => {
    Axios.get(
      "https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/"
    )
      .then(response => {
        // console.log("This is your response: ", response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("You have an error: ", error);
      });
  }, []);

  return (
    <section className="character-list">
      <SearchForm search={search} characters={characters} />
      {searchPage.map(filteredCharacters => {
        return (
          
        );
      })}
      {characters.map(props => {
        return (
          <CharacterCard
            name={props.name}
            image={props.image}
            status={props.status}
            species={props.species}
            gender={props.gender}
          />
        );
      })}
    </section>
  );
}
