import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nc-news-p6u3.onrender.com/api'
});

export function fetchArticles() {
    return api.get('/articles').then((response) => response.data.articles);
}

export function fetchArticleById(article_id) {
    return api.get(`/articles/${article_id}`).then((response) => response.data.article)
}