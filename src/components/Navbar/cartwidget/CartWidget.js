import React from 'react'
import {BsCart4} from "react-icons/bs";

const CartWidget = (props) => {
  return (
    <li className="nav-item">
      <p className="nav-link" aria-current="page">
        <button className="buttonCTA">
          <BsCart4/>{props.cartQty}
        </button>
      </p>
    </li>
  )
}

export default CartWidget