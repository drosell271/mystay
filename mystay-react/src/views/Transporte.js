import React from 'react'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Transporte = () => {

  const [tipoTransporte, setTipoTransporte] = useState("");


  // Pedir servicio
  const pideServicio = (tipoServicio) => {

    setTipoTransporte(tipoServicio);
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
          "nombre": "TRANSFER",
          "descripcion": tipoTransporte,
          "recursoNecesario": "TRANSFER",
          "tipoEmpleado": "RECEPCION",
          "duracion": 1.0,
          "precio": 10.00,
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
        if (tipoServicio !== ("Cabify" || "Uber")) {
          alert(`Ha solicitado servicio de: ${tipoServicio}`);
        }

        if (tipoTransporte === "Uber") {
          window.location.href = "https://www.uber.com/es/es-es/";
        } else if (tipoTransporte === "Cabify") {
          window.location.href = "https://cabify.com/es";
        }

      } else {
        console.log(data.detail || "Error de autenticación");

      }
    } catch (error) {
      console.log("Error al conectar con el servidor");
    }
  };


  return (
    <div>
      <div id='iconostransporte'>
        <div>
          <button className='botontr' onClick={() => { pideServicio("Uber") }}><img className="fotos" src="../uber.png" alt="imagenuber" /></button>
          <h2>Uber</h2>
        </div>
        <div>
          <button className='botontr' onClick={() => { pideServicio("Cabify") }}><img className="fotos" src="../cabify.png" alt="imagencabify" /></button>
          <h2>Cabify</h2>
        </div>
        <div>
          <button className='botontr' onClick={() => { pideServicio("Taxi") }}><img className="fotos" src="../taxi.png" alt="imagentaxi" /></button>
          <h2>Taxi</h2>
        </div>
        {/* <div>
          <button className='botontr' onClick={() => { pideServicio("Transporte privado") }}><img className="fotos" src="../transportepriv.png" alt="imagentransportepriv" /></button>
          <h2>Transporte <br /> privado</h2> 
        </div>
        <div>
          <button className='botontr' onClick={() => { pideServicio("Billetes") }}><img className="fotos" src="../billetes.png" alt="imagenbilletes" /></button>
          <h2>Billetes</h2>
        </div> */}
      </div>
      <Link to='/principal'><Button className='atras' variant="dark">Volver</Button></Link>
    </div>
  )
}

export default Transporte
