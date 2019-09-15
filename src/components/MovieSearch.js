import React, { useState } from 'react'
import moviesApi from '../libs/movies-api'

function MovieSearch(props) {
  const [state, setState] = useState({ searchText: '' })

  const onChange = (event) => {
    setState({ searchText: event.target.value })
  }

  const onSearch = async () => {
    const response = await moviesApi.searchByName(state.searchText)
    props.onSearchDone(response.data)
  }

  const onClean = () => {
    setState({ searchText: '' })
    props.onSearchClean()
  }

  return (
    <div>
      <input onChange={onChange} className="input" type="text" placeholder="Text input"  />
      <button onClick={onSearch} className="button">Buscar</button>
      <button onClick={onClean} className="button">Limpar</button>
    </div>
  )
}

export default MovieSearch