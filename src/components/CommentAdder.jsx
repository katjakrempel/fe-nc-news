import { useState } from "react";

function CommentAdder() {
  const [newComment, setNewComment] = useState("");
  console.log(newComment)
  return (
    <section>
      <form className="comment-form">
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
