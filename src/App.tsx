import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import { Developer } from './pages/Developer.tsx';
import { Home } from './pages/Home.tsx';
import { Social } from './pages/Social.tsx';
import { Spotify } from './pages/Spotify.tsx';
import { Woodhill } from './pages/Woodhill.tsx';

function App() {

  return (
    <Router>
      <div id="app">
        <header>
          <h1>Hello!</h1>
        </header>
        <main>
          <Routes>
            <Route path="/woodhill" element={<Woodhill />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/spotify" element={<Spotify />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Social />
          <section id="projects">
            <h2>Projects</h2>
            <a className="text-pigments" target="blank" rel="noreferrer noopener" href="https://pigments.chriskilinc.com/">PRIGMENTS</a>
            <a className="text-harmonize" target="blank" rel="noreferrer noopener" href="https://www.harmonize.chriskilinc.com/">harmonize</a>
            {/* <a className="text-scaletheory" target="blank" rel="noreferrer noopener" href="https://scaletheory.chriskilinc.com/">SCALETHEORY</a> */}
            <a className="text-sleepy" target="blank" rel="noreferrer noopener" href="https://www.sleepingcycles.com/">sleepingcycles</a>
          </section>
        </main>
      </div>
    </Router>
  )
}

export default App
