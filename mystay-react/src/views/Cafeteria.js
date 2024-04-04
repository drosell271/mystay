import React from 'react'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Cafeteria = () => {
  return (
    <div>
      {/* <img className="comida" src="./logoilt1.png" alt="imagencomida"/> */}
      <h2>Comida</h2>
      {/* <img className="bebida" src="./logoilt1.png" alt="imagenbebida"/> */}
      <h2>Bebida</h2>
      <div><Button className='atras' variant="dark">Atrás</Button></div>
    </div>
  )
}

export default Cafeteria
