import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../../utils/api";

function Home() {
  const [headlines, setHeadlines] = useState([]);
  const [headlinesLoading, setHeadlinesLoading] = useState(true);

  useEffect(() => {
    getArticles().then((response) => {
      setHeadlines(response.data.articles);
      setHeadlinesLoading(false);
    });
  }, []);

  if (headlinesLoading) return <p>Loading...</p>;
  return (
    <section>
      <h2>Latest News</h2>
      <ul>
        {headlines.slice(0, 3).map((headline) => {
          return (
            <li className="headline-card" key={headline.article_id}>
              <p>Posted on {headline.created_at.slice(0, 10)}</p>
              <Link to={`/articles/${headline.article_id}`}>
                <h3>{headline.title}</h3>
                <p>...Read more</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Home;
