import AlbumList from "../../components/AlbumList";

function ArchivePage({ albums, onToggleLike, title = "All Albums"}) {
  return (
    <section className="content archive-page">
      <br />
      <p className="eyebrow">Music archive</p>
      <h1>The Archives</h1>
      <AlbumList albums={albums} onToggleLike={onToggleLike} title={title}/>
    </section>
  );
}

export default ArchivePage;
