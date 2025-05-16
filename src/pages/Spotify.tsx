import { Link } from "react-router-dom";
import spotifyOrientalPsychedelic from "../assets/spotify-oriental-psychedelic.png"
import spotifyHeavyMetalDaze from "../assets/spotify-heavy-metal-daze.png"
import spotifyDesertBlues from "../assets/spotify-desert-blues.png"
import spotifyHeavyRotation from "../assets/spotify-heavy-rotation.png"

export const Spotify = () => {
  return (
    <section>
      <h2>My name is Christopher Kilinc and <span className="highlighted">this is what i listen to</span></h2>
      <Link to="/" className="arrow-back">«</Link>

      <div className="padded-small">
        <a href="https://www.last.fm/user/chriskilinc" className="highlighted" target="_blank" title="last.fm profile" rel="noreferrer noopener">
          here's my last.fm
        </a>
      </div>

      <div className="gallery">
        <a href="https://open.spotify.com/playlist/1zwTPkRP3JUT4DBFk2G2jg?si=d204f8c626e54aec" target="_blank" title="Oriental Psychedelic Playlist" rel="noreferrer noopener">
          <img src={spotifyOrientalPsychedelic} alt="Oriental Psychedelic Playlist Cover" width="250px" height="250px" />
          <p>Oriental Psychedelic</p>
        </a>
        <a href="https://open.spotify.com/playlist/6sJNmSJotHAn0tuh7YkNML?si=02997984c7f8467c" target="_blank" title="Heavy Metal Daze Playlist" rel="noreferrer noopener">
          <img src={spotifyHeavyMetalDaze} alt="Heavy Metal Daze Playlist Cover" width="250px" height="250px" />
          <p>Heavy Metal Daze</p>
        </a>
        <a href="https://open.spotify.com/playlist/1E5zuPMg5WwQgelgVhh9ST?si=65c22dce501b4d7b" target="_blank" title="Desert Blues Playlist" rel="noreferrer noopener">
          <img src={spotifyDesertBlues} alt="Desert Blues Playlist Cover" width="250px" height="250px" />
          <p>Desert Blues</p>
        </a>
        <a href="https://open.spotify.com/playlist/1CrRN3GixgKhGVcxyxPk24?si=e5181c6ad8314def" target="_blank" title="Heavy Rotation Playlist" rel="noreferrer noopener">
          <img src={spotifyHeavyRotation} alt="Heavy Rotation Playlist Cover" width="250px" height="250px" />
          <p>Heavy Rotation</p>
        </a>
      </div>

    </section>
  );
}
