import React from 'react'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Perfil = () => {
  return (

    //RECOGER LOS DATOS DE LA BASE DE DATOS !!
    //Segun el dni que se haya puesto al hacer login, mostrar los datos asociados

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
      <Link to='./editar'><Button id="botonEditar" variant="dark">Editar datos</Button></Link>
      <div><Link to='/principal'><Button className='atras' variant="dark">Volver</Button></Link></div>
    </div>
  )
}

export default Perfil
