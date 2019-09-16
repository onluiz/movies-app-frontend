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
          <div>
            <span>Lançamento: {props.releaseDate}</span>
          </div>
          <div className="tags">
            {props.genres.map(genre => <span key={genre.id} className="tag is-black">{genre.name}</span>)}
          </div>
          <button className="button" onClick={() => props.onOpenDetail(props.movieId)}>Ver detalhes</button>
        </div>
      </div>
    </div>
  )
}

export default MovieItem