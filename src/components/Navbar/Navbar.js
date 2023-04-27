import React from 'react'
import NavItems from './NavItems'
import CartWidget from './cartwidget/CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <p className="navbar-brand" ></p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavItems navBarTag={'Home'}/>
            <NavItems navBarTag={'Productos'}/>
            <CartWidget/>{'2'}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar