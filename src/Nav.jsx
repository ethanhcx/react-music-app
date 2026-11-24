import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="topbar">
      <div className="wordmark">
        <Link to="/">SIDE A</Link>
        <Link to="/archive"><span> / MUSIC ARCHIVE</span></Link>
      </div>

      <span className="topbar-note">A collection in progress</span>
    </nav>
  );
}

export default Nav;
