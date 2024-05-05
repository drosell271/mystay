import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { useState } from "react";

export const NuevaReserva = () => {
	const PrecioEstandar = 60;
	const PrecioPremium = 120;

	const [tipoHabitacion, setTipoHabitacion] = useState("estandar");
	const [numPersonas, setNumPersonas] = useState(1);
	const [fechaEntrada, setFechaEntrada] = useState("");
	const [fechaSalida, setFechaSalida] = useState("");

	const handleReservation = async () => {
		const idCliente = localStorage.getItem("clienteId");
		const precio =
			tipoHabitacion === "ESTANDAR"
				? PrecioEstandar * numPersonas
				: PrecioPremium * numPersonas;
		const reservaInfo = {
			fechaEntrada: `${fechaEntrada}T10:00:00.000+00:00`,
			fechaSalida: `${fechaSalida}T10:00:00.000+00:00`,
			cuenta: precio,
			clienteId: idCliente,
			habitacionId: 1,
		};

		try {
			const response = await fetch(`http://localhost:8080/reservas`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(reservaInfo),
			});

			if (response.ok) {
				const responseData = await response.json();
				alert("Reserva confirmada!");
				window.location.href = "http://localhost:8080/principal";
			} else {
				throw new Error("Algo salió mal con la petición");
				window.location.href = "http://localhost:8080/principal";
			}
		} catch (error) {
			console.error("Error al hacer la reserva:", error);
			alert("Error al confirmar la reserva");
		}
	};

	return (
		<div>
			<div id="checkIn">
				<div className="filaDe2">
					<div className="textoYinput">
						<label form="fechaEntrada">Fecha de Entrada:</label>
						<input
							type="date"
							onChange={(e) => setFechaEntrada(e.target.value)}
						></input>
					</div>
					<div className="textoYinput">
						<label form="fechaSalida">Fecha de Salida:</label>
						<input
							type="date"
							onChange={(e) => setFechaSalida(e.target.value)}
						></input>
					</div>
				</div>
				<div className="filaDe2">
					<Dropdown>
						<Dropdown.Toggle variant="dark">
							Tipo de Habitación
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item
								onClick={() => setTipoHabitacion("estandar")}
							>
								ESTANDAR
							</Dropdown.Item>
							<Dropdown.Item
								onClick={() => setTipoHabitacion("premium")}
							>
								PREMIUM
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
							<Dropdown.Item onClick={() => setNumPersonas(2)}>
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
				</div>
				<div>
					<h5>Habitación: {tipoHabitacion.toUpperCase()}</h5>
					<h5>Número de personas: {numPersonas}</h5>
					<h2>
						Precio:{" "}
						{tipoHabitacion === "ESTANDAR"
							? PrecioEstandar * numPersonas
							: PrecioPremium * numPersonas}{" "}
						€
					</h2>
					<Button
						variant="success"
						onClick={() => handleReservation()}
					>
						Confirmar Reserva
					</Button>
				</div>
				<Link to="/reservas">
					<Button variant="dark">Volver</Button>
				</Link>
			</div>
		</div>
	);
};
