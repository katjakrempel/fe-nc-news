import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../../utils/api";

function TopicList() {
  const [topics, setTopics] = useState([]);
  const [topicsLoading, setTopicsLoading] = useState(true);

  useEffect(() => {
    getTopics().then((response) => {
      setTopics(response.data.topics);
      setTopicsLoading(false);
    });
  }, []);

  if (topicsLoading) return <p>Loading...</p>;
  return (
    <section>
      <h2>Browse by Topic</h2>
      <ul>
        {topics.map((topic) => {
          return (
            <li className="topic-card" key={topic.slug}>
              <Link to={`/articles?topic=${topic.slug}`}>
                <h3>{topic.slug[0].toUpperCase() + topic.slug.slice(1)}</h3>
                <p>{topic.description}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default TopicList;
