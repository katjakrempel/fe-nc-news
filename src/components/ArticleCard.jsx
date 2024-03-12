function ArticleCard({ article }) {
  return (
    <li className="article-card">
      <h3>{article.title}</h3>
      <p>
        Posted by {article.author} at {article.created_at.slice(0, 10)}
      </p>
      <img src={article.article_img_url} />
      <p>Topic: {article.topic}</p>
      <p>Comments: {article.comment_count}</p>
      <p>Votes: {article.votes}</p>
    </li>
  );
}

export default ArticleCard;
