import { useContext } from "react";
import UserContext from "../contexts/User";
import { deleteComment } from "../../utils/api";

function CommentCard({ comment, setComments, setArticle }) {
  const { loggedInUser } = useContext(UserContext);

  function handleDelete() {
    deleteComment(comment.comment_id)
      .then(() => {
        setComments((currComments) => {
          return currComments.filter((currComment) => {
            return currComment.comment_id !== comment.comment_id;
          });
        });
      })
      .then(() => {
        setArticle((currArticle) => {
          return {
            ...currArticle,
            comment_count: currArticle.comment_count - 1,
          };
        });
      });
  }

  return (
    <section className="comment-card">
      <p>
        Posted by {comment.author} on {comment.created_at.slice(0, 10)}
      </p>
      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>
      <button
        onClick={handleDelete}
        disabled={comment.author === loggedInUser.username ? false : true}
        className="delete-button"
      >
        Delete
      </button>
    </section>
  );
}

export default CommentCard;
