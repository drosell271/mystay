import React from 'react'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Transporte = () => {

  const [tipoTransporte, setTipoTransporte] = useState("");


  return (
    <div>
      <div id='iconostransporte'>
        <div>
          <button className='botontr' onClick={() => { setTipoTransporte("Uber"); alert("Pidiendo un Uber") }}><img className="fotos" src="../uber.png" alt="imagenuber" /></button>
          <h2>Uber</h2>
        </div>
        <div>
          <button className='botontr' onClick={() => { setTipoTransporte("Cabify"); alert("Pidiendo un Cabify") }}><img className="fotos" src="../cabify.png" alt="imagencabify" /></button>
          <h2>Cabify</h2>
        </div>
        <div>
          <button className='botontr' onClick={() => { setTipoTransporte("Taxi"); alert("Pidiendo un taxi") }}><img className="fotos" src="../taxi.png" alt="imagentaxi" /></button>
          <h2>Taxi</h2>
        </div>
        <div>
          <button className='botontr' onClick={() => { setTipoTransporte("Transporte privado"); alert("Pidiendo transporte privado") }}><img className="fotos" src="../transportepriv.png" alt="imagentransportepriv" /></button>
          <h2>Transporte <br /> privado</h2>
        </div>
        <div>
          <button className='botontr' onClick={() => { setTipoTransporte("Billetes"); alert("Buscando billetes") }}><img className="fotos" src="../billetes.png" alt="imagenbilletes" /></button>
          <h2>Billetes</h2>
        </div>
      </div>
      <Link to='/principal'><Button className='atras' variant="dark">Volver</Button></Link>
    </div>
  )
}

export default Transporte
