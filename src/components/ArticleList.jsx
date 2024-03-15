import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getArticles } from "../../utils/api";
import ArticleCard from "./ArticleCard";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const topicQuery = searchParams.get("topic");

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
      <ul>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </section>
  );
}

export default ArticleList;
