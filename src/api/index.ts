import axios from 'axios';

//https://www.coingecko.com/pt/api/documentation
//https://docs.google.com/spreadsheets/d/1wTTuxXt8n9q7C4NDXqQpI3wpKu1_5bGVmP9Xz0XGSyU/edit#gid=0

const api = axios.create({

    baseURL:'https://api.coingecko.com/api/v3/'

});

export default api;