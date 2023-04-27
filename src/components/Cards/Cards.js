import React from 'react'

const Cards = () => {
  return (
    <div className="cardContainer">
      <div className="card">
          <h3 className="cardTitle"> Mother ASUS </h3>
          <img src="https://http2.mlstatic.com/D_NQ_NP_852492-MLA43248065290_082020-O.webp" className="cardImg"/>
          <p className="cardDesc"> Prime B450M-A II</p>
          <p className="cardDesc"> Socket AM4</p>
          <span className="cardPrice"> $12700,00 </span>
          <br/>
          <button className="buttonCTA"> Agregar al Carro </button>
      </div>
    </div>
  )
}

export default Cards