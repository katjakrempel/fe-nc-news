import { useState } from "react";
import { postComment } from "../../utils/api";

function CommentAdder({ article, setComments }) {
  const [newComment, setNewComment] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const requestBody = { username: "cooljmessy", body: newComment };
    postComment(article.article_id, requestBody).then((response) => {
      const newCommentFromApi = response.data.comment;
      setNewComment("");
      setComments((currComments) => {
        return [newCommentFromApi, ...currComments];
      });
    });
  }

  return (
    <section>
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
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default CommentAdder;
