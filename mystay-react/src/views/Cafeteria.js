import React from 'react';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Cafeteria = () => {

  const [servicio, setServicio] = useState("");
  const [recurso, setRecurso] = useState("");

  // Pedir servicio
  const pideServicio = (tipoServicio) => {

    setServicio(tipoServicio);

    if (tipoServicio === "Comida") {
      setRecurso("COCINA");
    } else if (tipoServicio === "Bebida") {
      setRecurso("CAFETERIA");
    }

    handleSubmit();
  }


  // CONSULTA A LA API
  const handleSubmit = async (e) => {
    const url = "http://localhost:8080/servicios";

    const idReserva = localStorage.getItem("token");

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "nombre": recurso,
          "descripcion": servicio,
          "recursoNecesario": recurso,
          "tipoEmpleado": "CAMARERO",
          "duracion": 3.0,
          "precio": 10.00,
          "esPremium": false,
          "satisfecho": false,
          "idEmpleado": null,
          "idRecurso": null,
          "idReserva": idReserva
        }),

      });


      if (response.ok) {
        alert(`Ha solicitado: ${servicio}\nVendrá un camarero a atenderle lo antes posible.`);

      } else {
        console.log("Error");

      }
    } catch (error) {
      console.log("Error al conectar con el servidor");
    }
  };

  return (
    <div className='ordenados'>
      <button className='botontr' onClick={() => { pideServicio("Comida") }}><img className="fotos" src="../comida.png" alt="imagencomida" /></button>
      <h2>Comida</h2>
      <button className='botontr' onClick={() => { pideServicio("Bebida") }}><img className="fotos" src="../bebida.png" alt="imagenbebida" /></button>
      <h2>Bebida</h2>
      <div><Link to='/habitacion'><Button className='atras' variant="dark">Volver</Button></Link></div>
    </div>
  )
}

export default Cafeteria