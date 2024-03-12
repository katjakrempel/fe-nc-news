import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nc-news-p6u3.onrender.com/api'
});

export function getArticles() {
    return api.get('/articles').then((response) => response.data.articles);
};

export function getArticleById(article_id) {
    return api.get(`/articles/${article_id}`).then((response) => response.data.article)
};

export function getCommentsByArticleId(article_id) {
return api.get(`/articles/${article_id}/comments`).then((response)=> response.data.comments)
};