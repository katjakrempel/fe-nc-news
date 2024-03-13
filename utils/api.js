import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nc-news-p6u3.onrender.com/api'
});

export function getArticles() {
    return api.get('/articles')
};

export function getArticleById(article_id) {
    return api.get(`/articles/${article_id}`)
};

export function getCommentsByArticleId(article_id) {
    return api.get(`/articles/${article_id}/comments`)
};