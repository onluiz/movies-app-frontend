import React, { useState } from 'react'
import MovieItem from './MovieItem'
import MovieDetail from './MovieDetail'
import moviesApi from '../libs/movies-api'
import './css/MovieList.css'

function MovieList(props) {
  const [state, setState] = useState({
    isActive: false,
    title: '',
  })

  const onOpenDetail = (movie) => {
    setState({ isActive: true, title: movie.title})
  }

  const onCloseDetail = () => {
    setState({ isActive: false, title: ''})
  }

  return (
    <div>
      {props.results.map((movie) => {
        return (
          <div className="MovieList-item">
            <MovieItem
              key={movie.id}
              movieId={movie.id}
              title={movie.title}
              genres={movie.genres}
              poster={moviesApi.getImage(movie.poster_path)}
              onOpenDetail={() => onOpenDetail(movie)}>
            </MovieItem>
          </div>
        )
      })}
      <div>
        <button onClick={props.onLoadUpcomingMovies}>Load More</button>
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