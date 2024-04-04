import React from 'react'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Confort = () => {
  return (
    <div>
      <div className='ordenados'>
        {/* <img className="almohada" src="./logoilt1.png" alt="imagenalmohada"/> */}
        <Button>Solicitar almohada</Button>
        {/* <img className="ropacama" src="./logoilt1.png" alt="imagenropacama"/> */}
        <Button>Ropa de cama</Button>
        {/* <img className="productosbaño" src="./logoilt1.png" alt="imagenproductosbaño"/> */}
        <Button>Productos de baño</Button>
        <div><Link to='/habitacion'><Button className='atras' variant="dark">Volver</Button></Link></div>
      </div>
    </div>
  )
}

export default Confort