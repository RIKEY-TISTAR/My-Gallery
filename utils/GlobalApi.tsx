const axios = require("axios");
// вызываем переменную с токенном из .env
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
// создаем подключение клиента
const axiosClient = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api`,
    headers: {
        'Authorization': `Bearer ${API_TOKEN}`
    }
});


// API - запрос на получение статьей
const getPictures = () => axiosClient.get('/pictures?populate=*');
// API - запрос на получение статьей для баннера

// API - запрос на получение ограниченного кол-ва записей
const getSortPictures = () => axiosClient.get('/pictures?pagination[pageSize]=4&sort[]=id:desc&populate=*');
// API - запрос на получение конкретной статьи

const getSinglePictures = (id) => axiosClient.get('/pictures?filters[slug][$eqi]=' + id + '&populate=*');



export default {
    getPictures,
    getSortPictures,
    getSinglePictures,
}