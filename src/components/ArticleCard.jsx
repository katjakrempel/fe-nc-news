function ArticleCard({ article }) {
  return (
    <li className="article-card">
      <p>{article.title}</p>
      <p>{article.author}</p>
      <p>{article.comment_count}</p>
      <p>{article.votes}</p>
    </li>
  );
}

export default ArticleCard;
