import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Concierge = () => {

    const [solicitud, setSolicitud] = useState("");

    const gestionaSolicitud = () => {
        if (solicitud !== "") {
            handleSubmit();
        } else {
            alert("Rellene su solicitud");
        }
    }

    const handleSubmit = async (e) => {
        //     console.log(`incidencia: ${incidencia}`);
        //     const url = "http://localhost:8080/servicios";

        //     const idReserva = localStorage.getItem("token");


        //     try {
        //         const response = await fetch(url, {
        //             method: "POST",
        //             headers: {
        //                 "Content-Type": "application/json",
        //             },
        //             body: JSON.stringify({
        //                 "nombre": "INCIDENCIAS",
        //                 "descripcion": incidencia,
        //                 "recursoNecesario": "INCIDENCIAS",
        //                 "tipoEmpleado": "MANTENIMIENTO",
        //                 "duracion": 5.0,
        //                 "precio": 0.00,
        //                 "esPremium": false,
        //                 "satisfecho": false,
        //                 "idEmpleado": null,
        //                 "idRecurso": null,
        //                 "idReserva": idReserva
        //             }),

        //         });


        //         if (response.ok) {
        //             alert("Su incidencia ha sido enviada y pronto será evaluada");

        //         } else {
        //             alert("La incidencia ha sido enviada, pero ahora mismo no podemos atenderle.");
        //         }
        //     } catch (error) {
        //         console.log("Error al conectar con el servidor");
        //     }
    };

    return (
        <div>
            <div className='ordenados'>
                <h5>¿Qué necesita?</h5>
                <input
                    type="text"
                    id="concierge"
                    placeholder="Escriba su solicitud"
                    onChange={e => { setSolicitud(e.target.value) }}
                />
                <Button className='enviar' variant="dark" onClick={() => gestionaSolicitud()}>Enviar</Button>
                <Link to='/premium'><Button className='atras' variant="dark">Volver</Button></Link>
            </div>
        </div>
    )
}
