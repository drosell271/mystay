import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Transporte = () => {
	// CONSULTA A LA API
	const handleSubmit = async (servicio) => {
		console.log(`servicio: ${servicio}`);

		const url = "http://localhost:8080/servicios";

		const idReserva = localStorage.getItem("token");

		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					nombre: "TRANSPORTE",
					descripcion: servicio,
					recursoNecesario: "OFICINA",
					tipoEmpleado: "RECEPCION",
					duracion: 1.0,
					precio: 0.0,
					esPremium: false,
					satisfecho: false,
					idEmpleado: null,
					idRecurso: null,
					idReserva: idReserva,
				}),
			});

			if (response.ok) {
				if (servicio === "Uber") {
					console.log("Redirigiendo a Uber");
					window.location.href = "https://www.uber.com/es/es-es/";
				} else if (servicio === "Cabify") {
					console.log("Redirigiendo a Cabify");
					window.location.href = "https://cabify.com/es";
				} else if (servicio === "Taxi") {
					console.log("Redirigiendo a Taxi");
					window.location.href = "http://localhost:8080/principal";
				}
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
			<div id="iconosTransporte">
				<div>
					<button
						className="botontr"
						onClick={() => {
							handleSubmit("Uber");
						}}
					>
						<img
							className="fotos"
							src="../uber.png"
							alt="imagenuber"
						/>
					</button>
					<h2>Uber</h2>
				</div>
				<div>
					<button
						className="botontr"
						onClick={() => {
							handleSubmit("Cabify");
						}}
					>
						<img
							className="fotos"
							src="../cabify.png"
							alt="imagencabify"
						/>
					</button>
					<h2>Cabify</h2>
				</div>
				<div>
					<button
						className="botontr"
						onClick={() => {
							handleSubmit("Taxi");
						}}
					>
						<img
							className="fotos"
							src="../taxi.png"
							alt="imagentaxi"
						/>
					</button>
					<h2>Taxi</h2>
				</div>
				{/* <div>
          <button className='botontr' onClick={() => { handleSubmit("Transporte privado") }}><img className="fotos" src="../transportepriv.png" alt="imagentransportepriv" /></button>
          <h2>Transporte <br /> privado</h2> 
        </div>
        <div>
          <button className='botontr' onClick={() => { handleSubmit("Billetes") }}><img className="fotos" src="../billetes.png" alt="imagenbilletes" /></button>
          <h2>Billetes</h2>
        </div> */}
			</div>
			<Link to="/principal">
				<Button className="atras" variant="dark">
					Volver
				</Button>
			</Link>
		</div>
	);
};

export default Transporte;
