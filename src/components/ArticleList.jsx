import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getArticles } from "../../utils/api";
import ArticleCard from "./ArticleCard";
import ErrorPage from "./ErrorPage";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("created_at");
  const [sortType, setSortType] = useState("desc");
  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticles().then((response) => {
      let articles = response.data.articles;

      if (sort === "created_at" && sortType === "desc") {
        articles.sort((a, b) => new Date(b["created_at"]) - new Date(a["created_at"]));
      } else if (sort === "created_at" && sortType === "asc") {
        articles.sort((a, b) => new Date(a["created_at"]) - new Date(b["created_at"]));
      } else if (sortType === "desc") {
        articles = articles.sort((a, b) => b[sort] - a[sort]);
      } else if (sortType === "asc") {
        articles = articles.sort((a, b) => a[sort] - b[sort]);
      }

      if (topicQuery) {
        const filteredArticles = articles.filter((article) => {
          return article.topic === topicQuery;
        });
        if (filteredArticles.length === 0) {
          setError("404: Page not found");
        } else {
          setArticles(filteredArticles);
        }
      } else {
        setArticles(articles);
      }
      setIsLoading(false);
    });
  }, [topicQuery, sort, sortType]);

  if (error) {
    return <ErrorPage errorMessage={error} />;
  }

  if (isLoading) return <p>Loading...</p>;
  return (
    <section>
      <h2>Browse all articles </h2>
      <p>Sort articles by:</p>
      <div>
        <select
          className="dropdown"
          value={sort}
          onChange={(event) => {
            setSort(event.target.value);
          }}
        >
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
      </div>
      <div>
        <select
          className="dropdown"
          value={sortType}
          onChange={(event) => {
            setSortType(event.target.value);
          }}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
      <ul>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </section>
  );
}

export default ArticleList;
