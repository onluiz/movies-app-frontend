import React from 'react';

const styles = {
  width: '100%',
  position: 'fixed',
}

function NavBar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation" style={styles}>
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <h1 className="title">Movies</h1>
        </a>
      </div>
    </nav>
  )
}

export default NavBar;