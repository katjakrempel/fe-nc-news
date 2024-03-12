import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../../utils/api";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchArticleById(article_id).then((response) => {
      setArticle(response);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="single-article">
      <h3>{article.title}</h3>
      <p>
        Posted by {article.author} at {article.created_at.slice(0, 10)}
      </p>
      <img src={article.article_img_url} />
      <p>Topic: {article.topic}</p>
      <p>Comments: {article.comment_count}</p>
      <p>Votes: {article.votes}</p>
      <p>{article.body}</p>
    </div>
  );
}

export default SingleArticle;
