import React, { useState, useEffect } from 'react'
import MovieItem from './MovieItem'
import MovieDetail from './MovieDetail'
import moviesApi from '../libs/movies-api'

function MovieList(props) {
  const [state, setState] = useState({
    isActive: false,
    title: '',
    results: [],
    page: 1,
  })

  const onOpenDetail = (movie) => {
    setState({ isActive: true, title: movie.title})
  }

  const onCloseDetail = () => {
    setState({ isActive: false, title: ''})
  }

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

  return (
    <div>
      {state.results.map((movie) => {
        return (
          <MovieItem
            key={movie.id}
            movieId={movie.id}
            title={movie.title}
            poster={moviesApi.getImage(movie.poster_path)}
            onOpenDetail={() => onOpenDetail(movie)}>
          </MovieItem>
        )
      })}
      <div>
        <button onClick={onLoadUpcomingMovies}>Load More {state.page}</button>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' }) }>Topo</button>
      </div>
      <MovieDetail
        isActive={state.isActive}
        title={state.title}
        onClose={onCloseDetail}>
          Oi2
      </MovieDetail>
    </div>
  )
}

export default MovieList