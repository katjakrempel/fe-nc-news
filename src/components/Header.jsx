import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>NC News</h1>
      <nav>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/articles">Articles</Link>
        <Link className="nav-link" to="/topics">Topics</Link>
      </nav>
    </header>
  );
}

export default Header;
