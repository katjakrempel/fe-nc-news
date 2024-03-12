import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../../utils/api";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    fetchArticleById(article_id).then((response) => {
      setArticle(response);
    });
  }, [article_id]);

  return (
    <div className="single-article">
      <h3>{article.title}</h3>
      <p>Posted by: {article.author}</p>
      <img src={article.article_img_url} />
      <p>Topic: {article.topic}</p>
      <p>Comments: {article.comment_count}</p>
      <p>Votes: {article.votes}</p>
      <p>{article.body}</p>
    </div>
  );
}

export default SingleArticle;
