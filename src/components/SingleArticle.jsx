import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentsByArticleId } from "../../utils/api";
import CommentCard from "./CommentCard";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((response) => {
      setArticle(response);
      setIsLoading(false);
    });
    getCommentsByArticleId(article_id).then((response) => {
      setComments(response);
    });
  }, [article_id]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <section className="single-article">
        <h3>{article.title}</h3>
        <p>
          Posted by {article.author} at {article.created_at.slice(0, 10)}
        </p>
        <img src={article.article_img_url} />
        <p>Topic: {article.topic}</p>
        <p>Comments: {article.comment_count}</p>
        <p>Votes: {article.votes}</p>
        <p>{article.body}</p>
      </section>
      <section className="comment-list">
        <h4>Comments</h4>
        <ul>
          {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </ul>
      </section>
    </div>
  );
}

export default SingleArticle;
