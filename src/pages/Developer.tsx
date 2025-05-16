import { Link } from "react-router-dom";

export function Developer() {
  return (
    <section>
      <h2>My name is Christopher Kilinc and <span className="highlighted">I develop software</span></h2>
      <Link to="/" className="arrow-back">«</Link>
      <p>
        I am currently employed at <a href="https://if.se" className="highlighted" target="_blank" rel="noreferrer noopener">
          If P&amp;C Insurance</a> working with Dotnet and TypeScript projects
        using Azure for infrastructure as well as continuous integration and delivery.
      </p>

      <p>
        Outside of work I develop web applications and services. Over at <a href="https://github.com/chriskilinc" className="highlighted" target="_blank" rel="noreferrer noopener">
          GitHub</a> you can find my open source projects.
      </p>
    </section>
  );
}
