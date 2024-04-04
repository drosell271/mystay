import React from 'react';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Cafeteria = () => {
  return (
    <div>
      <img className="fotos" src="../comida.png" alt="imagencomida" />
      <h2>Comida</h2>
      <img className="fotos" src="../bebida.png" alt="imagenbebida" />
      <h2>Bebida</h2>
      <div><Link to='/habitacion'><Button className='atras' variant="dark">Atrás</Button></Link></div>
    </div>
  )
}

export default Cafeteria