import React from 'react';
import './css/NavBar.css';

function NavBar(props) {
  return (
    <nav className="navbar NavBar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#void">
          <h1 className="title">Movies</h1>
        </a>
      </div>
      <div>
        <a className="navbar-item" href="#void" onClick={props.onClickSearch}>
          <i className="fas fa-search icon is-medium"></i>
        </a>
      </div>
    </nav>
  )
}

export default NavBar;