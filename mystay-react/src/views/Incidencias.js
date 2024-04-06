import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

const Incidencias = () => {
  return (
    <div>
      <div className='ordenados'>
        <h5>Incidencia:</h5>
        <input
          type="text"
          id="incidencias"
          placeholder="Escriba aquí la incidencia"
        />
        <Button className='enviar' variant="dark">Enviar</Button>
        <Link to='/habitacion'><Button className='atras' variant="dark">Atrás</Button></Link>
      </div>
    </div>
  )
}

export default Incidencias
