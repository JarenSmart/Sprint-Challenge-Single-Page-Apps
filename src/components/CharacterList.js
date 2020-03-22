import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  console.log(characters);

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/documentation")
      .then(response => {
        console.log("This is your response: ", response.data);
        setCharacters(response.data);
      })
      .catch(error => {
        console.log("You have an error: ", error);
      });

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
