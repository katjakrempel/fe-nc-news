function CommentCard({ comment }) {
  return (
    <section className="comment-card">
      <p>
        Posted by {comment.author} on {comment.created_at.slice(0, 10)}
      </p>
      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>
    </section>
  );
}

export default CommentCard;
