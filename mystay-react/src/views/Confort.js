import React from 'react'
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Confort = () => {

  // Posibles valores: almohada, ropa_cama, productos_baño
  const [servicio, setServicio] = useState("");

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
      <div id='iconosconfort' className='ordenados'>
        <img className="fotos" src="../almohada.png" alt="imagenalmohada" onClick={() => { setServicio("almohada"); alert("Ha solicitado una nueva almohada") }} />
        <h2>Solicitar almohada</h2>
        <img className="fotos" src="../ropacama.png" alt="imagenropacama" onClick={() => { setServicio("ropa_cama"); alert("Ha solicitado una ropa de cama") }} />
        <h2>Ropa de cama</h2>
        <img className="fotos" src="../productosbaño.png" alt="imagenproductosbaño" onClick={() => { setServicio("productos_baño"); alert("Ha solicitado nuevos productos para el baño") }} />
        <h2>Productos de baño</h2>
      </div>
      <div><Link to='/habitacion'><Button className='atras' variant="dark">Atrás</Button></Link></div>
    </div>
  )
}

export default Confort