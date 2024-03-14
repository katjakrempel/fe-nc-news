import { useContext } from "react";
import UserContext from "../contexts/User";
import { deleteComment } from "../../utils/api";

function CommentCard({ comment, setComments }) {
  const { loggedInUser } = useContext(UserContext);

  function handleDelete(event) {
    event.preventDefault();
    deleteComment(comment.comment_id).then(() => {
      setComments((currComments) => {
        return currComments.filter((currComment) => {
          return currComment.comment_id !== comment.comment_id;
        });
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
