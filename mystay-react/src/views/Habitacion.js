import React from 'react'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Habitacion = () => {
  return (
    <div>
      {/* <img className="comfort" src="./logoilt1.png" alt="imagenlogo"/> */}
      <h2>Comfort</h2>
      {/* <img className="cafeteria" src="./logoilt1.png" alt="imagenlogo"/> */}
      <h2>Cafetería</h2>
      {/* <img className="incidencias" src="./logoilt1.png" alt="imagenlogo"/> */}
      <h2>Incidencias</h2>
      <div><Button className='atras' variant="dark">Atrás</Button></div>
    </div>
    
  )
}

export default Habitacion
