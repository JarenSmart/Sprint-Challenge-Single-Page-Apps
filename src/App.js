import React from "react";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import Header from "./components/Header.js";

function App() {
  return (
    <main data-testid="app">
      <Header />
      <CharacterList />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterData} />
    </main>
  );
}

export default App;
