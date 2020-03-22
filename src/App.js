import React from "react";
import CharacterList from "./components/CharacterList";
import Header from "./components/Header.js";

export default function App() {
  return (
    <main data-testid="app">
      <CharacterList />
      <Header />
    </main>
  );
}
