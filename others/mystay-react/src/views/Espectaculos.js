import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Espectaculos = () => {
	const [espectaculo, setEspectaculo] = useState("");
	const [numPersonas, setNumPersonas] = useState(0);
	const [precio, setPrecio] = useState(0.0);
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
					nombre: espectaculo,
					descripcion: fechaYhora,
					recursoNecesario: "OFICINA",
					tipoEmpleado: "RECEPCION",
					duracion: 3.0,
					precio: precio,
					esPremium: true,
					satisfecho: false,
					idEmpleado: null,
					idRecurso: null,
					idReserva: idReserva,
				}),
			});

			if (response.ok) {
				alert(
					`Su solicitud ha sido procesada.\nSus entradas se han adquirido.`
				);
				window.location.href = "http://localhost:8080/principal";
			} else {
				alert(
					"No se encontró el recurso solicitado o no está abierto en este momento."
				);
				window.location.href = "http://localhost:8080/principal";
			}
		} catch (error) {
			console.log("Error al conectar con el servidor");
		}
	};

	return (
		<div className="ordenados">
			<h2>ESPECTÁCULOS</h2>
			<div className="enFila">
				<Dropdown>
					<Dropdown.Toggle variant="dark">
						Elegir Espectáculo
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item
							onClick={() => {
								setEspectaculo("TEATRO");
								setPrecio(40);
							}}
							defaultChecked
						>
							Teatro
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								setEspectaculo("CINE");
								setPrecio(10);
							}}
						>
							Cine
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								setEspectaculo("CONCIERTO");
								setPrecio(30);
							}}
						>
							Concierto
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => {
								setEspectaculo("DEPORTE");
								setPrecio(50);
							}}
						>
							Deporte
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown>
					<Dropdown.Toggle variant="dark">
						Número de personas
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item onClick={() => setNumPersonas(1)}>
							1
						</Dropdown.Item>
						<Dropdown.Item
							onClick={() => setNumPersonas(2)}
							defaultChecked
						>
							2
						</Dropdown.Item>
						<Dropdown.Item onClick={() => setNumPersonas(3)}>
							3
						</Dropdown.Item>
						<Dropdown.Item onClick={() => setNumPersonas(4)}>
							4
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<input
					type="date"
					onChange={(e) => {
						setFecha(e.target.value);
					}}
				/>
				<input
					type="time"
					onChange={(e) => {
						setHora(e.target.value);
					}}
				/>
			</div>

			<h4>
				Ha seleccionado: <b>{espectaculo}</b>
			</h4>
			<h4>
				El día: <b>{fecha}</b> , a las: <b>{hora}</b>
			</h4>
			<h4>
				Número de personas: <b>{numPersonas}</b>
			</h4>
			<h4>
				El precio es de: <b>{precio * numPersonas} €</b>
			</h4>
			<Button variant="success" onClick={() => handleSubmit()}>
				Confirmar
			</Button>
			<Link to="/premium">
				<Button className="atras" variant="dark">
					Volver
				</Button>
			</Link>
		</div>
	);
};
