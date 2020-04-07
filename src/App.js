import React from "react";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <main data-testid="app">
      <Header />
      <SearchForm />
      <CharacterList />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterData} />
    </main>
  );
}

export default App;
