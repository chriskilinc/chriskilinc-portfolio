import githubIcon from "../assets/github_logo.svg";
import linkedinLogo from "../assets/linkedin_logo.svg";
import twitterIcon from "../assets/twitter_logo.svg";
import spotifyIcon from "../assets/spotify_logo.svg";
import woodhillIcon from "../assets/woodhill-logo.svg";
import { Link } from "react-router-dom";

export function Social() {
  return (
    <section className="social">
      <Link to="/woodhill" className="icon" title="Woodhill Studios">
        <img className="icon" src={woodhillIcon} alt="Woodhill Studios icon" />
      </Link>

      <a
        className="icon"
        href="https://github.com/chriskilinc"
        target="_blank"
        title="GitHub"
        rel="noreferrer noopener"
      >
        <img className="icon" src={githubIcon} alt="GitHub" />
      </a>

      <a
        className="icon"
        href="https://www.linkedin.com/in/chriskilinc/"
        target="_blank"
        title="LinkedIn"
        rel="noreferrer noopener"
      >
        <img className="icon" src={linkedinLogo} alt="LinkedIn icon" />
      </a>

      <a
        className="icon"
        href="https://twitter.com/chriskilinc"
        target="_blank"
        title="Twitter (X)"
        rel="noreferrer noopener"
      >
        <img className="icon" src={twitterIcon} alt="Twitter icon" />
      </a>

      <Link to="/spotify" className="icon" title="Spotify">
        <img className="icon" src={spotifyIcon} alt="Spotify icon" />
      </Link>

      <a
        href="mailto:christopher.kilinc@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        christopher.kilinc@gmail.com
      </a>
    </section>
  );
}
