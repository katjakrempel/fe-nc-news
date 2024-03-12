import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nc-news-p6u3.onrender.com/api'
});


export function fetchArticles() {
    return api.get('/articles').then((response) => response.data.articles);
}