import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Confort = () => {
	// CONSULTA A LA API
	const handleSubmit = async (servicio) => {
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
					nombre: "HABITACIONES",
					descripcion: servicio,
					recursoNecesario: "HABITACIONES",
					tipoEmpleado: "HABITACIONES",
					duracion: 2.0,
					precio: 0.0,
					esPremium: false,
					satisfecho: false,
					idEmpleado: null,
					idRecurso: null,
					idReserva: idReserva,
				}),
			});

			if (response.ok) {
				alert(`Ha solicitado: ${servicio}`);
			} else {
				alert(
					"No se encontró el recurso solicitado o no está abierto en este momento."
				);
			}
		} catch (error) {
			console.log("Error al conectar con el servidor");
		}
	};

	return (
		<div>
			<div id="iconosconfort" className="ordenados">
				<button
					className="botontr"
					onClick={() => {
						handleSubmit("Llamar al personal");
					}}
				>
					<img
						className="fotos"
						src="../llamarpersonal.png"
						alt="imagenLlamarPersonal"
					/>
				</button>
				<h2>Llamar al personal</h2>
				<button
					className="botontr"
					onClick={() => {
						handleSubmit("Ropa de cama");
					}}
				>
					<img
						className="fotos"
						src="../ropacama.png"
						alt="imagenropacama"
					/>
				</button>
				<h2>Ropa de cama</h2>
				<button
					className="botontr"
					onClick={() => {
						handleSubmit("Productos de baño");
					}}
				>
					<img
						className="fotos"
						src="../productosbaño.png"
						alt="imagenproductosbaño"
					/>
				</button>
				<h2>Productos de baño</h2>
			</div>
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

export default Confort;
