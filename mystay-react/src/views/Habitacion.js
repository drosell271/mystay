import React from 'react'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Habitacion = () => {
  return (
    <div>
      <div className='menu'>
        <Link to='./confort'>
          {/* <img className="comfort" src="./logoilt1.png" alt="imagenlogo"/> */}
          <h2>Confort</h2>
        </Link>
        <Link to='./cafeteria'>
          {/* <img className="cafeteria" src="./logoilt1.png" alt="imagenlogo"/> */}
          <h2>Cafetería</h2>
        </Link>
        <Link to='./incidencias'>
          {/* <img className="incidencias" src="./logoilt1.png" alt="imagenlogo"/> */}
          <h2>Incidencias</h2>
        </Link>
      </div>
      <Link to='/principal'><Button className='atras' variant="dark">Volver</Button></Link>
    </div>

  )
}

export default Habitacion
