import axios from 'axios'

export const axiosClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3',

})