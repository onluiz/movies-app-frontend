import React from 'react'

function MovieItem(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={props.poster} alt="Movie poster" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{ props.title }</p>
          </div>
        </div>

        <div className="content">
          <button className="button" onClick={() => props.onOpenDetail(props.movieId)}>Ver detalhes</button>
        </div>
      </div>
    </div>
  )
}

export default MovieItem