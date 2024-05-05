import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Cafeteria = () => {

	// CONSULTA A LA API
	const handleSubmit = async (servicio, recurso) => {
		const url = "http://localhost:8080/servicios";

		const idReserva = localStorage.getItem("token");
		const isPremium = localStorage.getItem("isPremium");

		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					nombre: recurso,
					descripcion: servicio,
					recursoNecesario: recurso,
					tipoEmpleado: "CAMARERO",
					duracion: 3.0,
					precio: 10.0,
					esPremium: isPremium,
					satisfecho: false,
					idEmpleado: null,
					idRecurso: null,
					idReserva: idReserva,
				}),
			});

			if (response.ok) {
				alert(
					`Ha solicitado: ${servicio}\nVendrá un camarero a atenderle lo antes posible.`
				);
			} else {
				alert("No se encontró el recurso solicitado o no está abierto en este momento.");
			}
		} catch (error) {
			console.log("Error al conectar con el servidor");
		}
	};

	return (
		<div className="ordenados">
			<button
				className="botontr"
				onClick={() => {
					handleSubmit("Comida", "COCINA");
				}}
			>
				<img className="fotos" src="../comida.png" alt="imagencomida" />
			</button>
			<h2>Comida</h2>
			<button
				className="botontr"
				onClick={() => {
					handleSubmit("Bebida", "CAFETERIA");
				}}
			>
				<img className="fotos" src="../bebida.png" alt="imagenbebida" />
			</button>
			<h2>Bebida</h2>
			<div>
				<Link to="/habitacion">
					<Button className="atras" variant="dark">
						Volver
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Cafeteria;
