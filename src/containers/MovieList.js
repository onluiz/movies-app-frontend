import React, { useState } from 'react'
import MovieItem from './MovieItem'
import MovieDetail from './MovieDetail'
import moviesApi from '../libs/movies-api'
import './css/MovieList.css'

function MovieList(props) {
  const [state, setState] = useState({
    isActive: false,
    title: '',
    poster: '',
    genres: [],
    overview: '',
    releaseDate: ''
  })

  const onOpenDetail = (movie) => {
    setState({
      isActive: true,
      title: movie.title,
      poster: moviesApi.getImage(movie.poster_path),
      genres: movie.genres,
      overview: movie.overview,
      releaseDate: movie.release_date,
    })
  }

  const onCloseDetail = () => {
    setState({
      isActive: false,
      title: '',
      poster: '',
      genres: [],
      overview: '',
      releaseDate: '',
    })
  }

  return (
    <div>
      {props.results.map((movie) => {
        return (
          <div className="MovieList-item" key={movie.id}>
            <MovieItem
              movieId={movie.id}
              title={movie.title}
              genres={movie.genres}
              releaseDate={movie.release_date}
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
      <MovieDetail isActive={state.isActive} title={state.title} onClose={onCloseDetail}>
        <div>
          <span>Lançamento: {state.releaseDate}</span>
        </div>
        <div>
          Resumo: {state.overview}
        </div>
        <div className="tags">
          {state.genres.map(genre => <span key={genre.id} className="tag is-black">{genre.name}</span>)}
        </div>
        <div>
          <figure className="image is-128x128">
            <img src={state.poster} alt="Movie poster" />
          </figure>
        </div>
      </MovieDetail>
    </div>
  )
}

export default MovieList