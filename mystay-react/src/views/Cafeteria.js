import React from 'react'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Cafeteria = () => {
  return (
    <div>
      <div className='ordenados'>
        {/* <img className="comida" src="./logoilt1.png" alt="imagencomida"/> */}
        <Button>Comida</Button>
        {/* <img className="bebida" src="./logoilt1.png" alt="imagenbebida"/> */}
        <Button>Bebida</Button>
      </div>
      <div><Link to='/habitacion'><Button className='atras' variant="dark">Atrás</Button></Link></div>
    </div>
  )
}

export default Cafeteria
