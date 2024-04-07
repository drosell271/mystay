import React from 'react'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Confort = () => {

  // Posibles valores: Almohada, Ropa de cama, Productos de baño
  const [servicio, setServicio] = useState("");

  // Pedir servicio
  const pideServicio = (tipoServicio) => {
    setServicio(tipoServicio);
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
          "nombre": "HABITACIONES",
          "descripcion": servicio,
          "recursoNecesario": "HABITACIONES",
          "tipoEmpleado": "HABITACIONES",
          "duracion": 2.0,
          "precio": 0.00,
          "esPremium": false,
          "satisfecho": false,
          "idEmpleado": null,
          "idRecurso": null,
          "idReserva": idReserva
        }),

      });

      // const data = await response.json();

      if (response.ok) {
        // localStorage.setItem("token", data.token);
        alert(`Ha solicitado: ${tipoServicio}`);

      } else {
        console.log(data.detail || "Error de autenticación");

      }
    } catch (error) {
      console.log("Error al conectar con el servidor");
    }
  };

  return (
    <div>
      <div id='iconosconfort' className='ordenados'>
        <button className='botontr' onClick={() => { pideServicio("Almohada") }}><img className="fotos" src="../almohada.png" alt="imagenalmohada" /></button>
        <h2>Solicitar almohada</h2>
        <button className='botontr' onClick={() => { pideServicio("Ropa de cama") }}><img className="fotos" src="../ropacama.png" alt="imagenropacama" /></button>
        <h2>Ropa de cama</h2>
        <button className='botontr' onClick={() => { pideServicio("Productos de baño") }}><img className="fotos" src="../productosbaño.png" alt="imagenproductosbaño" /></button>
        <h2>Productos de baño</h2>
      </div>
      <div><Link to='/habitacion'><Button className='atras' variant="dark">Volver</Button></Link></div>
    </div>
  )
}

export default Confort