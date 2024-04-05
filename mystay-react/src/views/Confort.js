import React from 'react'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Confort = () => {
  return (
    <div>
      <div id='iconosconfort' className='ordenados'>
        <img className="fotos" src="../almohada.png" alt="imagenalmohada" />
        <h2>Solicitar almohada</h2>
        <img className="fotos" src="../ropacama.png" alt="imagenropacama" />
        <h2>Ropa de cama</h2>
        <img className="fotos" src="../productosbaño.png" alt="imagenproductosbaño" />
        <h2>Productos de baño</h2>
      </div>
      <div><Link to='/habitacion'><Button className='atras' variant="dark">Atrás</Button></Link></div>
    </div>
  )
}

export default Confort