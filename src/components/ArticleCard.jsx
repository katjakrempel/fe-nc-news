import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <li className="article-card">
      <Link to={`/articles/${article.article_id}`}>
        <h3>{article.title}</h3>
        <p>...Read more</p>
      </Link>
      <img src={article.article_img_url} />
      <p>
        Posted by {article.author} on {article.created_at.slice(0, 10)}
      </p>
      <p>Topic: {article.topic[0].toUpperCase() + article.topic.slice(1)}</p>
      <p>Comments: {article.comment_count}</p>
      <p>Votes: {article.votes}</p>
    </li>
  );
}

export default ArticleCard;
