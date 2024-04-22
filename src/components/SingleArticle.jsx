import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getArticleById,
  getCommentsByArticleId,
  patchArticle,
} from "../../utils/api";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [articleLoading, setArticleLoading] = useState(true);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [voteError, setVoteError] = useState(null);

  function voteArticle(article_id, inc_votes) {
    const body = { inc_votes: inc_votes };
    setArticle((currArticle) => {
      return { ...currArticle, votes: currArticle.votes + inc_votes };
    });
    setVoteError(null);
    patchArticle(article_id, body).catch((err) => {
      setArticle((currArticle) => {
        return { ...currArticle, votes: currArticle.votes - inc_votes };
      });
      setVoteError("Something went wrong, please try again");
    });
  }

  useEffect(() => {
    setArticleLoading(true);
    getArticleById(article_id).then((response) => {
      setArticle(response.data.article);
      setArticleLoading(false);
    });
    setCommentsLoading(true);
    getCommentsByArticleId(article_id).then((response) => {
      setComments(response.data.comments);
      setCommentsLoading(false);
    });
  }, [article_id]);

  if (articleLoading || commentsLoading) return <p>Loading...</p>;
  if (voteError) return <p>{voteError}</p>;
  return (
    <div>
      <section className="single-article">
        <h3>{article.title}</h3>
        <p>
          Posted by {article.author} on {article.created_at.slice(0, 10)}
        </p>
        <img src={article.article_img_url} />
        <p>Topic: {article.topic[0].toUpperCase() + article.topic.slice(1)}</p>
        <p>Comments: {article.comment_count}</p>
        <button
          onClick={() => {
            voteArticle(article.article_id, -1);
          }}
          className="vote-button"
        >
          -
        </button>
        <span className="article-vote">Votes: {article.votes}</span>
        <button
          onClick={() => voteArticle(article.article_id, 1)}
          className="vote-button"
        >
          +
        </button>
        <p>{article.body}</p>
      </section>
      <section className="comment-list">
        <h4>Comments</h4>
        <CommentAdder
          article={article}
          setComments={setComments}
          setArticle={setArticle}
        />
        <ul>
          {comments.map((comment) => {
            return (
              <CommentCard
                key={comment.comment_id}
                comment={comment}
                setComments={setComments}
                setArticle={setArticle}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default SingleArticle;
