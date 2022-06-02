import axios from 'axios';

//https://www.coingecko.com/pt/api/documentation

const api = axios.create({

    baseURL:'https://api.coingecko.com/api/v3/'

});

export default api;