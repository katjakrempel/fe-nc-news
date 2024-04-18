import { Link } from "react-router-dom";

function ErrorPage({ errorMessage }) {
  return (
    <div>
      <h2>{errorMessage}</h2>
      <Link to="/">...Return to Homepage</Link>
    </div>
  );
}

export default ErrorPage;
