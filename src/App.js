import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { Developer } from './pages/Developer';
import { Home } from './pages/Home';
import { Social } from './pages/Social';
import { Spotify } from './pages/Spotify';

function App() {
  return (
    <Router>
      <div id="app">
        <header>
          <h1>Hello!</h1>
        </header>
        <main>
          <Switch>
            <Route path="/developer">
              <Developer />
            </Route>
            <Route path="/spotify">
              <Spotify />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Social />
          <section id="projects">
            <h2>Projects</h2>
            <a className="text-pigments" target="blank" href="https://www.pigments.chriskilinc.com/">PRIGMENTS</a>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
