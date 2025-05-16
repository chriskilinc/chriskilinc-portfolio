import { Link } from "react-router-dom";
import logo from "../assets/woodhill-logo.webp";

export const Woodhill = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <h2>
        My name is Christopher Kilinc and I'm part of{" "}
        <span className="highlighted">Woodhill Studios</span>
      </h2>
      <Link to="/" className="arrow-back">
        «
      </Link>

      <div className="padded-small">
        <a
          href="https://woodhillstudios.se/"
          className="highlighted"
          target="_blank"
          title="woodhillstudios.se"
          rel="noreferrer noopener"
        >
          woodhillstudios.se
        </a>
      </div>

      <div className="woodhill-content">
        <blockquote>
          "Woodhill Studios, a haven for the creatively inclined. Convening a
          colorful cast of 13 creatives with backgrounds spanning from game
          development to wood carving, this innovative space is a melting pot of
          imaginative expression. With the power of music production, graffiti,
          film, animation, and art at their fingertips, the members of Woodhill
          Studios have the tools to bring their wildest ideas to life".
          <p>-Woodhill Studios</p>
        </blockquote>
        <img src={logo} alt="Woodhill Studios Logo" className="image-main" />
      </div>
    </section>
  );
};
