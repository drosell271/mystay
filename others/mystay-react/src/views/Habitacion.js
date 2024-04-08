import React from 'react'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Habitacion = () => {
  return (
    <div>
      <div id='iconoshabitacion' className='ordenados'>
        <Link to='./confort'><img className="fotos" src="../confort.png" alt="imagenconfort" /></Link>
        <h2>Confort</h2>
        <Link to='./cafeteria'><img className="fotos" src="../cafeteria.png" alt="imagencafeteria" /></Link>
        <h2>Cafetería</h2>
        <Link to='./incidencias'><img className="fotos" src="../incidencias.png" alt="imagenlogo" /></Link>
        <h2>Incidencias</h2>
      </div>
      <Link to='/principal'><Button className='atras' variant="dark">Volver</Button></Link>
    </div>

  )
}

export default Habitacion
