package com.isst.mystay.controller;

import com.isst.mystay.model.Reserva;
import com.isst.mystay.service.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservas")
public class ReservaController {
	@Autowired
	private ReservaService ReservaService;

	@PostMapping
	public ResponseEntity<Reserva> agregarReserva(@RequestBody Reserva Reserva) {
		Reserva ReservaGuardado = ReservaService.guardarReserva(Reserva);
		if (ReservaGuardado != null) {
			return ResponseEntity.notFound().build();
		} else {
			return ResponseEntity.ok(ReservaGuardado);
		}
	}

	@GetMapping
	public List<Reserva> listarTodosLosReservas() {
		return ReservaService.obtenerTodosLosReservas();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Reserva> obtenerReservaPorId(@PathVariable Long id) {
		Reserva Reserva = ReservaService.obtenerReservaPorId(id);
		if (Reserva == null) {
			return ResponseEntity.notFound().build();
		}
		{
			return ResponseEntity.ok(Reserva);
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<Reserva> actualizarReserva(@PathVariable Long id, @RequestBody Reserva ReservaDetalles) {
		Reserva ReservaActualizado = ReservaService.actualizarReserva(id, ReservaDetalles);
		if (ReservaActualizado == null) {
			return ResponseEntity.notFound().build();
		}
		{
			return ResponseEntity.ok(ReservaActualizado);
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> eliminarReserva(@PathVariable Long id) {
		if (ReservaService.eliminarReserva(id)) {
			return ResponseEntity.ok().build();
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}
