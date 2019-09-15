import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import moviesApi from './libs/movies-api';

function App() {
  const [state, setState] = useState({
    results: [],
    page: 1,
  })

  const onLoadUpcomingMovies = async () => {
    setState({ ...state, page: state.page + 1 })
  }

  async function getUpcomingMovies() {
    try {
      const { data } = await moviesApi.getUpcomingMovies(state.page)
      const { results, page } = data
      setState({ results: state.results.concat(results), page })
    } catch(e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getUpcomingMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.page])

  const onSearchDone = ({ results, page }) => {
    setState({...state, results, page })
  }

  const onSearchClean = () => {
    getUpcomingMovies()
  }

  return (
    <div>
      <NavBar />
      <div>
        <MovieSearch onSearchDone={onSearchDone} onSearchClean={onSearchClean}/>
        <MovieList onLoadUpcomingMovies={onLoadUpcomingMovies} results={state.results} />
      </div>
    </div>
  )
}

export default App;
