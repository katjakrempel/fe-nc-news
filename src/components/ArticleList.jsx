import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getArticles } from "../../utils/api";
import ArticleCard from "./ArticleCard";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState('date');
  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");
console.log(sort)
  useEffect(() => {
    getArticles().then((response) => {
      const articles = response.data.articles;
      if (topicQuery) {
        const filteredArticles = articles.filter((article) => {
          return article.topic === topicQuery;
        });
        setArticles(filteredArticles);
      } else {
        setArticles(articles);
      }
      setIsLoading(false);
    });
  }, [topicQuery]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <section>
      <h2>View all articles: </h2>
      <div className="dropdown">
        <label>
          Sort articles by
          <select value={sort} onChange={(event)=>{setSort(event.target.value)}}>
            <option value="date">Date</option>
            <option value="comment_count">Comment Count</option>
            <option value="votes">Votes</option>
          </select>
        </label>
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
