import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const Principal = () => {
	const isPremium = localStorage.getItem("isPremium");

	return (
		<div>
			<div id="iconosPrincipal">
				{/* ACTIVAR ESTOS 2 DIVS PARA SPRINT 3 !!! */}

				<div>
					<Link to="/perfil">
						<img
							src="../icono_perfil_nuevo.png"
							alt="PERFIL"
							className="iconoMenuPrincipal"
						/>
					</Link>
					<h2>Perfil</h2>
				</div>

				<div>
					<Link to="/reservas">
						<img
							src="../icono_reserva.png"
							alt="RESERVAS"
							className="iconoMenuPrincipal"
						/>
					</Link>
					<h2>Reservas</h2>
				</div>

				<div>
					<Link to="/habitacion">
						<img
							src="../icono_cama.png"
							alt="HABITACION"
							className="iconoMenuPrincipal"
						/>
					</Link>
					<h2>Habitación</h2>
				</div>

				<div>
					<Link to="/transporte">
						<img
							src="../icono_transporte_nuevo.png"
							alt="TRANSPORTE"
							className="iconoMenuPrincipal"
						/>
					</Link>
					<h2>Transporte</h2>
				</div>

				<div>
					{isPremium ? (
						<div>
							<Link to="/premium">
								<img
									src="../logoPremium.png"
									alt="PREMIUM"
									className="iconoMenuPrincipal"
								/>
							</Link>
							<h2>Premium</h2>
						</div>
					) : (
						<div></div>
					)}
				</div>
			</div>
			<Link to="/login">
				<Button variant="dark">Logout</Button>
			</Link>
		</div>
	);
};
