import ArtistProfile from "../../components/ArtistProfile"
import AlbumList from "../../components/AlbumList"

function HomePage({ albums, onToggleLike}) {
  return (
    <div id="top" className="content">
      <ArtistProfile />
      <AlbumList albums={albums.slice(0, 5)} onToggleLike={onToggleLike} />
    </div>
  )
}

export default HomePage;
