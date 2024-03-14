import {useContext } from "react";
import UserContext from "../contexts/User";

function CommentCard({ comment }) {
  const { loggedInUser } = useContext(UserContext);
  return (
    <section className="comment-card">
      <p>
        Posted by {comment.author} on {comment.created_at.slice(0, 10)}
      </p>
      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>

      <button disabled={comment.author === loggedInUser.username ? false : true}  className="delete-button">Delete</button>
    </section>
  );
}

export default CommentCard;
