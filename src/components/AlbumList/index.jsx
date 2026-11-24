import AlbumCard from '../AlbumCard';

function AlbumList({ albums, onToggleLike, title=' Top Albums'}) {
  return (
    <section className="music-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">The collection</p>
          <h2 id="albums-heading">{title}</h2>
        </div>
      </div>
      <ul className="album-grid">
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} onToggleLike={onToggleLike} />
        ))}
      </ul>
    </section>
  );
}

export default AlbumList;
