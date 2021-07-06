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
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Social />
        </main>
      </div>
    </Router>
  );
}

export default App;
