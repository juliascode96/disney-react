import axios from 'axios'

const apiKey = '0ff5332abbc56d5b8800de5d07904251'
const baseUrl = 'https://api.themoviedb.org/3/'

const getMovies = (sortBy) => {
    return axios.get(`${baseUrl}discover/movie?api_key=${apiKey}&language=es-ES&${sortBy}`)
}

const getMovie = (id) => {
    return axios.get(`${baseUrl}movie/${id}?api_key=${apiKey}&language=es-ES`)
}

const getSearchResults = (query) => {
    return axios.get(`${baseUrl}search/movie?api_key=${apiKey}&query=${query}&page=1&language=es-ES`)
}

const getTrending = () => {
    return axios.get(`${baseUrl}trending/all/day?api_key=${apiKey}&language=es-ES`)
}

export default getMovies
export { getMovie, getSearchResults, getTrending } 