import React from 'react'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Confort = () => {
  return (
    <div>
      {/* <img className="almohada" src="./logoilt1.png" alt="imagenalmohada"/> */}
      <h2>Solicitar almohada</h2>
      {/* <img className="ropacama" src="./logoilt1.png" alt="imagenropacama"/> */}
      <h2>Ropa de cama</h2>
      {/* <img className="productosbaño" src="./logoilt1.png" alt="imagenproductosbaño"/> */}
      <h2>Productos de baño</h2>
      <div><Button className='atras' variant="dark">Atrás</Button></div>
    </div>
  )
}

export default Confort