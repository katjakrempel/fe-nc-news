import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentsByArticleId, patchArticle } from "../../utils/api";
import CommentCard from "./CommentCard";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [articleLoading, setArticleLoading] = useState(true);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [] = useState()

  function upVote(article_id) {
    const body = {inc_votes: 1}
    setArticle((currArticle) => {
      return {...currArticle, votes: article.votes + 1}
    })
    patchArticle(article_id, body)
  }

  function downVote(article_id) {
    const body = {inc_votes: -1}
    setArticle((currArticle) => {
      return {...currArticle, votes: article.votes -1}
    })
    patchArticle(article_id, body)
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
// console.log(article.comment_count)
  if (articleLoading || commentsLoading) return <p>Loading...</p>;
  return (
    <div>
      <section className="single-article">
        <h3>{article.title}</h3>
        <p>
          Posted by {article.author} on {article.created_at.slice(0, 10)}
        </p>
        <img src={article.article_img_url} />
        <p>Topic: {article.topic}</p>
        <p>Comments: {article.comment_count}</p>
        <button onClick={() => {
          upVote(article.article_id)
          // console.log(article.comment_count)
          }} className="vote-button">+</button>
        <span className="article-vote">Votes: {article.votes}</span>
        <button onClick={() => downVote(article.article_id)} className="vote-button">-</button>
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
