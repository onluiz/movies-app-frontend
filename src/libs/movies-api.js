import axios from 'axios'
import BASE_URL from './api'

const moviesApi = {
  getUpcomingMovies(page = 1) {
    return axios.get(`${BASE_URL}/movies/upcoming?page=${page}`)
  },
  getById(id) {
    return axios.get(`${BASE_URL}/movies/${id}`)
  },
  searchByName(movieName = '') {
    return axios.get(`${BASE_URL}/movies?page=1&query=${movieName}`)
  },
  getImage(path = '') {
    return `${BASE_URL}/movies/image?imagePath=${path}`
  }
}

export default moviesApi