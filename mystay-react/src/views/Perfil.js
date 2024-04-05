import React from 'react';
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Perfil = () => {

  const estadoInicial = {
    nombre: 'Illia',
    apellidos: 'Topuria',
    telefono: 123456789,
    email: 'email@email.com',
    documento: '12345678X'
  }

  // HABRÍA QUE OBTENER LOS DATOS DE LA BDD Y HACER: setDatosPerfil() con los datos reales!!
  const [datosPerfil, setDatosPerfil] = useState(estadoInicial);

  return (

    //RECOGER LOS DATOS DE LA BASE DE DATOS !!
    //Segun el dni que se haya puesto al hacer login, mostrar los datos asociados

    <div>
      <div className='ordenados'>
        <h2>Su perfil:</h2>
        <div>
          <h5>Nombre:</h5>
          <p>{datosPerfil.nombre}</p>
        </div>
        <div>
          <h5>Apellidos:</h5>
          <p>{datosPerfil.apellidos}</p>
        </div>
        <div>
          <h5>Teléfono:</h5>
          <p>{datosPerfil.telefono}</p>
        </div>
        <div>
          <h5>Email:</h5>
          <p>{datosPerfil.email}</p>
        </div>
        <div>
          <h5>DNI/Pasaporte:</h5>
          <p>{datosPerfil.documento}</p>
        </div>
      </div>
      <Link to='./editar'><Button id="botonEditar" variant="dark">Editar datos</Button></Link>
      <div><Link to='/principal'><Button className='atras' variant="dark">Volver</Button></Link></div>
    </div >
  )
}

export default Perfil
