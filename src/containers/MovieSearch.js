import React, { useState } from 'react'
import Modal from '../components/Modal'
import moviesApi from '../libs/movies-api'
import './css/MovieSearch.css'

function MovieSearch(props) {
  const [state, setState] = useState({
    searchText: '',
    isLoading: false,
  })

  const onChange = (event) => {
    setState({ ...state, searchText: event.target.value })
  }

  const onSearch = async () => {
    setState({ ...state, isLoading: true })
    try {
      const response = await moviesApi.searchByName(state.searchText)
      props.onSearchDone(response.data)
    } catch(e) {
      console.error(e)
    } finally {
      setState({ ...state, isLoading: false })
    }
  }

  const onClean = () => {
    setState({ searchText: '' })
    props.onSearchClean()
  }

  return (
    <Modal
      title={'Buscar filme'}
      isActive={props.isActive}
      onClose={props.onClose}
      footer={
        <footer className="modal-card-foot">
          <button
            onClick={onSearch}
            disabled={state.isLoading ? true : false}
            className={`button is-info is-medium ${state.isLoading ? 'is-loading' : ''}`}>
              Buscar
            </button>
            <button onClick={onClean} disabled={state.isLoading ? true : false} className="button is-medium">
              Cancelar
            </button>
        </footer>
      }
    >
      <div className="field MovieSearch">
        <div className="control">
          <input onChange={onChange} className="input is-medium" type="text" placeholder="Text input"  />
        </div>
      </div>
    </Modal>
  )
}

export default MovieSearch