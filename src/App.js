import React from "react";
import { Route, Link } from "react-router-dom";

import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import Header from "./components/Header";

function App() {
  return (
    <main data-testid="app">
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/characters">
          <button>Character List</button>
        </Link>
        <Link to="/search">
          <button>Search</button>
        </Link>
      </div>
      <Route exact path="/search" component={Header} />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
    </main>
  );
}

export default App;
