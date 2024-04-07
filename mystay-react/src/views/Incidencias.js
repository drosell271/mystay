import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Incidencias = () => {

  const [incidencia, setIncidencia] = useState("");

  const gestionaIncidencias = () => {
    if (incidencia != "") {
      alert("Su incidencia ha sido enviada y pronto será evaluada");
    } else {
      alert("Por favor, escriba su incidencia");
    }
  }


  // CONSULTA A LA API
  // const handleSubmit = async (e) => {
  //   const url = "http://localhost:8080/login";

  //   try {
  //       const response = await fetch(url, {
  //           method: "POST",
  //           headers: {
  //               "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({ documento, numHabitacion }),

  //       });

  //       const data = await response.json();

  //       if (response.ok) {
  //           localStorage.setItem("token", data.token);
  //           navigate('/principal');

  //       } else {
  //           setError(data.detail || "Error de autenticación");
  //           mostrarError(error);

  //       }
  //   } catch (error) {
  //       setError("Error al conectar con el servidor");
  //       mostrarError(error);
  //   }
  // };


  return (
    <div>
      <div className='ordenados'>
        <h5>Incidencia:</h5>
        <input
          type="text"
          id="incidencias"
          placeholder="Escriba aquí la incidencia"
          onChange={e => { setIncidencia(e.target.value) }}
        />
        <Button className='enviar' variant="dark" onClick={() => gestionaIncidencias()}>Enviar</Button>
        <Link to='/habitacion'><Button className='atras' variant="dark">Atrás</Button></Link>
      </div>
    </div>
  )
}

export default Incidencias
