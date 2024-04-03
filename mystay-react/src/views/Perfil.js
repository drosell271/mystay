import React from 'react'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Perfil = () => {
  return (
    <div>
        <div>
            <h2>Su perfil:</h2>
            <h5>Nombre:</h5>
            <p>Ilia</p>
            <h5>Apellidos:</h5>
            <p>Topuria</p>
            <h5>Teléfono:</h5>
            <p>123456789</p>
            <h5>Email:</h5>
            <p>email@email.com</p>
            <h5>DNI/Pasaporte:</h5>
            <p>12345678X</p>
      </div>
      <Button id="metodopago" variant="dark">Métodos de Pago</Button>
      <Button id="fidelizacion" variant="dark">Fidelización</Button>
      <div><Button className='atras' variant="dark">Atrás</Button></div>
    </div>
  )
}

export default Perfil
