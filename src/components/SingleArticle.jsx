import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../../utils/api";
import CommentCard from "./CommentCard";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([
    {
      comment_id: 16,
      body: "This is a bad article name",
      article_id: 6,
      author: "butter_bridge",
      votes: 1,
      created_at: "2020-10-11T15:23:00.000Z",
    },
    {
      comment_id: 167,
      body: "Deleniti itaque et est unde autem. Labore illo commodi quaerat natus fugiat adipisci. Adipisci unde recusandae aliquam suscipit ipsum.",
      article_id: 3,
      author: "grumpy19",
      votes: 19,
      created_at: "2020-02-05T09:16:00.000Z",
    },
  ]);
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
