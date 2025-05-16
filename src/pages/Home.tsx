import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <section>
      <h2>My name is Christopher Kilinc</h2>
      <p>I am a self-taught <Link className="link highlighted" to="/developer">Software Developer</Link> working at If P&C Insurance in Sweden.</p>
      <p>Checkout my <a href="https://www.linkedin.com/in/chriskilinc/"
        className="highlighted"
        target="_blank"
        rel="noreferrer noopener">LinkedIn</a> if you are interested in my work experience aswell as education and skill endorsements.</p>
      <p>You can find my open source projects over at <a
        href="https://github.com/chriskilinc"
        className="highlighted"
        target="_blank"
        rel="noreferrer noopener"
      >GitHub</a>.
      </p>
      <p>Whenever I'm not programming, I enjoy playing and producing music, sometimes draw, paint and I do occasionally brew beers.</p>
    </section>
  );
}
