import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Spa = () => {

    const [servicio, setServicio] = useState("");
    const [precio, setPrecio] = useState(0);
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
                    nombre: servicio,
                    descripcion: fechaYhora,
                    recursoNecesario: "OFICINA",
                    tipoEmpleado: "RECEPCION",
                    duracion: 10.0,
                    precio: precio,
                    esPremium: true,
                    satisfecho: false,
                    idEmpleado: null,
                    idRecurso: null,
                    idReserva: idReserva
                }),

            });


            if (response.ok) {
                alert("Su petición ha sido enviada correctamente y pronto será atendido.");

            } else {
                alert("Su petición ha sido enviada, pero ahora mismo no podemos atenderle.");
            }
        } catch (error) {
            console.log("Error al conectar con el servidor");
        }
    }

    return (
        <div className='ordenados'>
            <div className='enFila'>
                <Dropdown>
                    <Dropdown.Toggle variant='dark'>
                        Elegir servicio:
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => { setServicio("spa"); setPrecio(20) }}>Solicitar cita en el SPA</Dropdown.Item>
                        <Dropdown.Item onClick={() => { setServicio("masaje"); setPrecio(30) }}>Solicitar sesión de masaje</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <input type='date' onChange={(e) => { setFecha(e.target.value) }} />
                <input type='time' onChange={(e) => { setHora(e.target.value) }} />
            </div>
            <h4>Ha elegido: <b>{servicio.toUpperCase()}</b></h4>
            <h4>El día: <b>{fecha}</b> , a las: <b>{hora}</b></h4>
            <h4>El precio es de: <b>{precio} €</b></h4>
            <Button variant='success' onClick={() => handleSubmit()}>Confirmar</Button>
            <Link to='/premium'><Button className='atras' variant="dark">Volver</Button></Link>
        </div>
    )
}
