import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

export const CheckOut = () => {
	const isPremium = localStorage.getItem("isPremium");

	const [cuenta, setCuenta] = useState(0);

	const handleReservation = async () => {
		const idCliente = localStorage.getItem("clienteId");
		const precio =
			tipoHabitacion === "ESTANDAR"
				? PrecioEstandar * numPersonas
				: PrecioPremium * numPersonas;
		// const reservaInfo = {
		// 	fechaEntrada: `${fechaEntrada}T10:00:00.000+00:00`,
		// 	fechaSalida: `${fechaSalida}T10:00:00.000+00:00`,
		// 	cuenta: precio,
		// 	clienteId: idCliente,
		// 	habitacionId: 1,
		// };

		try {
			const response = await fetch(`http://localhost:8080/reservas`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (response.ok) {
				const responseData = await response.json();
				setCuenta(responseData.cuenta);
			} else {
				throw new Error("Algo salió mal con la petición");
			}
		} catch (error) {
			console.error("Error", error);
			alert("Error");
		}
	};

	const handleSubmit = async () => {
		const idReserva = localStorage.getItem("token");

		const url = `http://localhost:8080/reservas/${idReserva}/checkout`;

		try {
			const response = await fetch(url, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await response.json();

			if (response.ok) {
				alert(`Ha realizado el CheckOut correctamente.`);
			} else {
				alert("No se ha podido realizar el CheckOut");
			}
		} catch (error) {
			console.log("Error al conectar con el servidor");
		}
	};

	useEffect(() => {
		handleReservation();
	}, []);

	return (
		<div>
			<div id="recibo">
				<h2>
					<u>Recibo</u>
				</h2>
				<h3>Gasto Total: {cuenta}</h3>
			</div>

			<div id="despedida">
				<p>
					¡Muchas gracias por su visita! Esperamos volver a verle
					pronto
				</p>
				{(isPremium === true) ? (
					<Link to="lateCheckout">
						<Button>Late Checkout</Button>{" "}
					</Link>
				) : (
					<div></div>
				)}

				<Button variant="success" onClick={handleSubmit()}>Confirmar Check-Out</Button>
				<Link to="/reservas">
					<Button variant="dark">Volver</Button>
				</Link>
			</div>
		</div>
	);
};
