import React from 'react'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Transporte = () => {
  return (
    <div>
      <div id='iconostransporte'>
        <div>
          <img className="fotos" src="../uber.png" alt="imagenuber"/>
          <h2>Uber</h2>
        </div>
        <div>
          <img className="fotos" src="../cabify.png" alt="imagencabify"/>
          <h2>Cabify</h2>
        </div>
        <div>
          <img className="fotos" src="../taxi.png" alt="imagentaxi"/>
          <h2>Taxi</h2>
        </div>
        <div>
          <img className="fotos" src="../transportepriv.png" alt="imagentransportepriv"/>
          <h2>Transporte <br/> privado</h2>
        </div>
        <div>
          <img className="fotos" src="../billetes.png" alt="imagenbilletes"/>
          <h2>Billetes</h2>
        </div>
      </div>
      <Link to='/principal'><Button className='atras' variant="dark">Volver</Button></Link>
    </div>
  )
}

export default Transporte
