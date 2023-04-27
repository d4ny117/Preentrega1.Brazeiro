import React from 'react'


const NavItems = (props) => {
  return (
    <li className="nav-item">
        <p className="nav-link" aria-current="page">
        <button className="buttonCTA">{props.navBarTag}</button>
        </p>
    </li>
  )
}

export default NavItems