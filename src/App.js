import React, { Component } from 'react';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import moviesApi from './libs/movies-api';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      page: 1,
    }
  }

  async componentDidMount() {
    this.loadUpcomingMovies()
  }

  loadMore = async () => {
    this.incrementPage()
    const response = await moviesApi.getUpcomingMovies(this.state.page)
    const { results } = response.data
    this.setState({
      ...this.state,
      movies: this.state.movies.concat(results),
    })
  }

  loadUpcomingMovies = async () => {
    try {
      const response = await moviesApi.getUpcomingMovies(this.state.page)
      const { results, page } = response.data
      this.setState({ ...this.state, movies: results, page })
    } catch(error) {
      console.error(error)
    }
  }

  incrementPage = () => {
    this.setState({ ...this.state, page: this.state.page + 1 })
  }

  onSearchDone = ({ results, page }) => {
    this.setState({...this.state, movies: results, page })
  }

  onSearchClean = () => {
    this.loadUpcomingMovies()
  }

  render() {
    return (
      <div>
        <NavBar />
        <div>
          <br />
          <br />
          <br />
          <MovieSearch onSearchDone={this.onSearchDone} onSearchClean={this.onSearchClean}/>
          <MovieList />
        </div>
      </div>
    )
  }
}

export default App;
