import React from 'react'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Habitacion = () => {
  return (
    <div>
      {/* <img className="comfort" src="./logoilt1.png" alt="imagenlogo"/> */}
      <h2>Comfort</h2>
      {/* <img className="cafeteria" src="./logoilt1.png" alt="imagenlogo"/> */}
      <h2>Cafetería</h2>
      {/* <img className="incidencias" src="./logoilt1.png" alt="imagenlogo"/> */}
      <h2>Incidencias</h2>
      <Link to='/principal'><Button className='atras' variant="dark">Atrás</Button></Link>
    </div>
    
  )
}

export default Habitacion
