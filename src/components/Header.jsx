import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/User";

function Header() {
  const { loggedInUser } = useContext(UserContext);
  return (
    <header>
      <h1>NC News</h1>
      <p>Welcome, {loggedInUser.username}!</p>
      <nav>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/articles">Articles</Link>
        <Link className="nav-link" to="/topics">Topics</Link>
      </nav>
    </header>
  );
}

export default Header;
