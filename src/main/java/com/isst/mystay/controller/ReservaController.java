package com.isst.mystay.controller;

import com.isst.mystay.model.Reserva;
import com.isst.mystay.service.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.ZonedDateTime;

import java.util.List;
import java.time.Instant;
import java.util.Date;

@RestController
@RequestMapping("/reservas")
public class ReservaController {
	@Autowired
	private ReservaService ReservaService;

	@PostMapping()
	public ResponseEntity<Reserva> agregarReserva(@RequestBody Reserva Reserva) {
		Reserva ReservaGuardado = ReservaService.guardarReserva(Reserva);
		if (ReservaGuardado == null) {
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
	public ResponseEntity<Reserva> obtenerReservaPorId(@PathVariable Integer id) {
		Reserva Reserva = ReservaService.obtenerReservaPorId(id);
		if (Reserva == null) {
			return ResponseEntity.notFound().build();
		}
		{
			return ResponseEntity.ok(Reserva);
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<Reserva> actualizarReserva(@PathVariable Integer id, @RequestBody Reserva ReservaDetalles) {
		Reserva ReservaActualizado = ReservaService.actualizarReserva(id, ReservaDetalles);
		if (ReservaActualizado == null) {
			return ResponseEntity.notFound().build();
		}
		{
			return ResponseEntity.ok(ReservaActualizado);
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> eliminarReserva(@PathVariable Integer id) {
		if (ReservaService.eliminarReserva(id)) {
			return ResponseEntity.ok().build();
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PutMapping("/{id}/checkout")
	public ResponseEntity<Reserva> checkoutReserva(@PathVariable("id") Integer id) {
		Reserva updatedReserva = ReservaService.updateReservaTotal(id);
		return ResponseEntity.ok(updatedReserva);
	}

	@PutMapping("/{id}/late-checkout/{checkoutTime}")
	public ResponseEntity<Reserva> lateCheckoutReserva(@PathVariable("id") Integer id,
			@PathVariable("checkoutTime") String checkoutTime) {
		Instant instant = ZonedDateTime.parse(checkoutTime).toInstant();
		Date checkoutDate = Date.from(instant);
		Reserva updatedReserva = ReservaService.lateCheckOut(id, checkoutDate);
		return ResponseEntity.ok(updatedReserva);
	}

	@PutMapping("/{id}/late-checkin/{checkinTime}")
	public ResponseEntity<Reserva> lateCheckinReserva(@PathVariable("id") Integer id,
			@PathVariable("checkinTime") String checkinTime) {
		Instant instant = ZonedDateTime.parse(checkinTime).toInstant();
		Date checkinDate = Date.from(instant);
		Reserva updatedReserva = ReservaService.lateCheckIn(id, checkinDate);
		return ResponseEntity.ok(updatedReserva);
	}
}
