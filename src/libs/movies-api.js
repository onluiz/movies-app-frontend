import axios from 'axios'

const BASE_URL = `${process.env.REACT_APP_API}/${process.env.REACT_APP_STAGE}`
const moviesApiInstance = axios.create({ baseURL: BASE_URL });

const moviesApi = {
  getUpcomingMovies(page = 1) {
    return moviesApiInstance.get(`/movies/upcoming?page=${page}`)
  },
  getById(id) {
    return moviesApiInstance.get(`/movies/${id}`)
  },
  searchByName(movieName = '') {
    return moviesApiInstance.get(`/movies?page=1&query=${movieName}`)
  },
  getImage(path = '') {
    return `${BASE_URL}/movies/image?imagePath=${path}`
  }
}

export default moviesApi