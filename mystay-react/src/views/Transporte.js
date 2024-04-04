import React from 'react'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Transporte = () => {
  return (
    <div>
      <div className='menu'>
        {/* <img className="uber" src="./logoilt1.png" alt="imagenalmohada"/> */}
        <h2>Uber</h2>
        {/* <img className="cabify" src="./logoilt1.png" alt="imagenropacama"/> */}
        <h2>Cabify</h2>
        {/* <img className="taxi" src="./logoilt1.png" alt="imagenproductosbaño"/> */}
        <h2>Taxi</h2>
        {/* <img className="transportepriv" src="./logoilt1.png" alt="imagenproductosbaño"/> */}
        <h2>Transporte privado</h2>
        {/* <img className="billetes" src="./logoilt1.png" alt="imagenproductosbaño"/> */}
        <h2>Billetes</h2>
      </div>
      <Link to='/principal'><Button className='atras' variant="dark">Volver</Button></Link>
    </div>
  )
}

export default Transporte
