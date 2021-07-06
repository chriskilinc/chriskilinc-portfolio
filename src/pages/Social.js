import React from "react";
import githubIcon from "../assets/github_logo.svg";
import linkedinLogo from "../assets/linkedin_logo.svg";
import twitterIcon from "../assets/twitter_logo.svg";

export function Social() {
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
  );
}
