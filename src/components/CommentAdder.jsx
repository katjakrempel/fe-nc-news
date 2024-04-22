import { useState, useContext } from "react";
import { postComment } from "../../utils/api";
import UserContext from "../contexts/User";

function CommentAdder({ article, setComments, setArticle }) {
  const { loggedInUser } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const requestBody = { username: loggedInUser.username, body: newComment };
    postComment(article.article_id, requestBody)
      .then((response) => {
        const newCommentFromApi = response.data.comment;
        setNewComment("");
        setComments((currComments) => {
          return [newCommentFromApi, ...currComments];
        });
      })
      .then(() => {
        setArticle((currArticle) => {
          return {
            ...currArticle,
            comment_count: currArticle.comment_count + 1,
          };
        });
      });
  }

  return (
    <section>
      <p>You are posting as {loggedInUser.username}</p>
      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          placeholder="Write a comment..."
          value={newComment}
          type="text"
          id="new-comment"
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
        />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default CommentAdder;
