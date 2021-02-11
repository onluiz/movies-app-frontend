import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import MovieList from './containers/MovieList';
import MovieSearch from './containers/MovieSearch';
import moviesApi from './libs/movies-api';
import './App.css';

function App() {
  const [state, setState] = useState({
    results: [],
    page: 1,
  })

  const [searchModal, setSearchModal] = useState({
    isActive: false,
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

  const onClickSearch = () => {
    setSearchModal({ isActive: true })
  }

  const onCloseSearch = () => {
    setSearchModal({ isActive: false })
  }

  const onSearchDone = ({ results, page }) => {
    setState({...state, results, page })
    setSearchModal({ isActive: false })
  }

  const onSearchClean = () => {
    getUpcomingMovies()
  }

  return (
    <div className="App">
      <NavBar onClickSearch={onClickSearch} />
      <MovieSearch onSearchDone={onSearchDone} onSearchClean={onSearchClean} isActive={searchModal.isActive} onClose={onCloseSearch}/>
      <MovieList onLoadUpcomingMovies={onLoadUpcomingMovies} results={state.results} />
    </div>
  )
}

export default App;
