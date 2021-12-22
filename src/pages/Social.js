import React from "react";
import githubIcon from "../assets/github_logo.svg";
import linkedinLogo from "../assets/linkedin_logo.svg";
import twitterIcon from "../assets/twitter_logo.svg";
import spotifyIcon from "../assets/spotify_logo.svg";
import { Link } from "react-router-dom";

export function Social() {
  return (
    <section className="social">
      <a className="icon" href="https://github.com/chriskilinc" target="_blank" title="GitHub" rel="noreferrer noopener">
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

      <a className="icon" href="https://twitter.com/chriskilinc" target="_blank" title="Twitter" rel="noreferrer noopener">
        <img className="icon" src={twitterIcon} alt="Twitter icon" />
      </a>

      <Link to="/spotify" className="icon">
        <img className="icon" src={spotifyIcon} alt="Spotify icon" />
      </Link>

      <a
        href="mailto:chriskilinc@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >chriskilinc@gmail.com
      </a>
    </section>
  );
}
