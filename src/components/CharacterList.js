import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/"
    )
      .then((response) => {
        // console.log("This is your response: ", response.data.results);
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.log("You have an error: ", error);
      });
  }, []);

  return (
    <section className="character-list">
      {characters.map((char) => {
        return (
          <CharacterCard
            key={char.name}
            name={char.name}
            image={char.image}
            status={char.status}
            species={char.species}
            gender={char.gender}
          />
        );
      })}
    </section>
  );
}
