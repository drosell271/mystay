import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Turismo = () => {

    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");

    const handleSubmit = async () => {
        const url = "http://localhost:8080/servicios";

        const idReserva = localStorage.getItem("token");
        const fechaYhora = String(fecha) + String(hora);


        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nombre: "TURISMO",
                    descripcion: fechaYhora,
                    recursoNecesario: "OFICINA",
                    tipoEmpleado: "RECEPCION",
                    duracion: 10.0,
                    precio: 0.00,
                    esPremium: true,
                    satisfecho: false,
                    idEmpleado: null,
                    idRecurso: null,
                    idReserva: idReserva
                }),

            });


            if (response.ok) {
                alert("Ha solicitado una visita con guía.");

            } else {
                alert("Error al concertar la visita guiada.");
            }
        } catch (error) {
            console.log("Error al conectar con el servidor");
        }
    }

    return (
        <div className='ordenados'>
            <h3>Elija cuándo desea recorrer la ciudad con uno de nuestros guías turísticos:</h3>
            <input type='date' onChange={(e) => { setFecha(e.target.value) }} />
            <input type='time' onChange={(e) => { setHora(e.target.value) }} />
            <h4>Solicitará un guía turístico el día: <b>{fecha}</b> , a las: <b>{hora}</b></h4>
            <Button variant='success' onClick={() => handleSubmit()}>Confirmar</Button>
            <Link to='/premium'><Button className='atras' variant="dark">Volver</Button></Link>
        </div>
    )
}
