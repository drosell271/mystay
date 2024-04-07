import React from 'react';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Cafeteria = () => {

  const [servicio, setServicio] = useState("");

  return (
    <div className='ordenados'>
      <img className="fotos" src="../comida.png" alt="imagencomida" onClick={() => { setServicio("comida"); alert("Pronto le atenderemos para servirle su comida") }} />
      <h2>Comida</h2>
      <img className="fotos" src="../bebida.png" alt="imagenbebida" onClick={() => { setServicio("bebida"); alert("Pronto le atenderemos con nuestro servicio de bebidas") }} />
      <h2>Bebida</h2>
      <div><Link to='/habitacion'><Button className='atras' variant="dark">Atrás</Button></Link></div>
    </div>
  )
}

export default Cafeteria