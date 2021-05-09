import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import githubIcon from "./assets/github_logo.svg"
import linkedinLogo from "./assets/linkedin_logo.svg"
import twitterIcon from "./assets/twitter_logo.svg"

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

function Home() {
  return (
    <section>
      <h2>My name is Christopher Kilinc</h2>
      <p>I am a self-taught <Link className="link highlighted" to="/developer">Software Developer</Link> working at If P&C Insurance in Sweden.</p>
      <p>Checkout my <a href="https://www.linkedin.com/in/chriskilinc/"
        class="highlighted"
        target="_blank"
        rel="noreferrer noopener">LinkedIn</a> if you are interested in my work experience aswell as education and skill endorsements.</p>
      <p>You can find my open source projects over at <a
        href="https://github.com/chriskilinc"
        class="highlighted"
        target="_blank"
      >GitHub</a>.
      </p>
      <p>Whenever I'm not programming, I enjoy playing and producing music, sometimes draw, paint and I do occasionally brew beers.</p>
    </section>
  )
}

function Developer() {
  return (
    <section>
      <h2>My name is Christopher Kilinc and <span className="highlighted">I develop software</span></h2>
      <Link to="/" className="arrow-back">«</Link>
      <p>
        I am currently employed at <a href="https://if.se" class="highlighted" target="_blank" rel="noreferrer noopener">
          If P&amp;C Insurance</a> working with Dotnet and TypeScript projects
        using Azure for infrastructure as well as continuous integration and delivery.
      </p>

      <p>
        Outside of work I develop web applications and services. Over at <a href="https://github.com/chriskilinc" class="highlighted" target="_blank" rel="noreferrer noopener">
          GitHub</a> you can find my open source projects.
      </p>
    </section>
  )
}

function Social() {
  return (
    <section className="social">
      <a class="icon" href="https://github.com/chriskilinc" target="_blank" title="GitHub" rel="noreferrer noopener">
        <img class="icon" src={githubIcon} alt="GitHub" />
      </a>

      <a
        class="icon"
        href="https://www.linkedin.com/in/chriskilinc/"
        target="_blank"
        title="LinkedIn"
        rel="noreferrer noopener"
      >
        <img class="icon" src={linkedinLogo} alt="LinkedIn icon" />
      </a>

      <a class="icon" href="https://twitter.com/chriskilinc" target="_blank" title="Twitter" rel="noreferrer noopener">
        <img class="icon" src={twitterIcon} alt="Twitter icon" />
      </a>

      <a
        href="mailto:chriskilinc@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        class="link"
      >chriskilinc@gmail.com
            </a>
    </section>
  )
}

export default App;
