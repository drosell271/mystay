package com.isst.mystay.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isst.mystay.service.ReservaService;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/login")
public class LoginController {
	@Autowired
	private ReservaService reservaService;

	@PostMapping
	public ResponseEntity<?> loginYBuscarReserva(@RequestBody Map<String, Object> credentials) {
		// System.out.println(credentials);

		String documento = (String) credentials.get("documento");
		String numHabitacionStr = (String) credentials.get("numHabitacion");
		Integer numHabitacion = null;

		try {
			numHabitacion = Integer.parseInt(numHabitacionStr);
		} catch (NumberFormatException e) {
			// Maneja la excepción si la cadena no se puede convertir en un entero
			return ResponseEntity.badRequest().body("Número de habitación no válido");
		}

		Optional<Long> idReserva = reservaService.buscarIdReservaPorDocumentoYNumeroHabitacion(documento,
				numHabitacion);
		return idReserva.map(ResponseEntity::ok)
				.orElseGet(() -> ResponseEntity.notFound().build());
	}
}
