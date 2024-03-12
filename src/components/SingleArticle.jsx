import { useState } from "react";

function SingleArticle() {
  const [article, setArticle] = useState({
    title: "Seafood substitutions are increasing",
    topic: "cooking",
    author: "weegembump",
    body: "Text from the article..",
    created_at: "2018-05-30T15:59:13.341Z",
    votes: 0,
    article_img_url:
      "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
    comment_count: 6,
  });
  return (
    <div className="single-article">
      <h3>{article.title}</h3>
      <p>Posted by: {article.author}</p>
      <img src={article.article_img_url}/>
      <p>Topic: {article.topic}</p>
      <p>Comments: {article.comment_count}</p>
      <p>Votes: {article.votes}</p>
      <p>{article.body}</p>
    </div>
  );
}

export default SingleArticle;
