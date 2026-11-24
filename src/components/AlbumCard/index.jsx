import { Link } from "react-router-dom";

function AlbumCard({ album, onToggleLike }) {
  return (
    <li className="album-card">
      <Link className="album-img" to="/archive/album"><img className="album-cover" src={album.coverUrl} alt={`${album.title} album cover`} /> </Link>
      <div className="album-details">
        <div>
          <Link className="album-title" to="/archive/album"><h3>{album.title}</h3></Link>
          <p>Released {album.releaseDate}</p>
        </div>
        <button
          className={`like-button${album.liked ? ' is-liked' : ''}`}
          type="button"
          onClick={() => onToggleLike(album.id)}
        >
          {album.liked ? '♥ Liked' : '♡ Like'}
        </button>
      </div>
    </li>
  );
}

export default AlbumCard;
