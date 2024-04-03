package com.isst.mystay.controller;

import com.isst.mystay.model.Hotel;
import com.isst.mystay.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hoteles")
public class HotelController {
	@Autowired
	private HotelService HotelService;

	@PostMapping
	public ResponseEntity<Hotel> agregarHotel(@RequestBody Hotel Hotel) {
		Hotel HotelGuardado = HotelService.guardarHotel(Hotel);
		if (HotelGuardado != null) {
			return ResponseEntity.notFound().build();
		} else {
			return ResponseEntity.ok(HotelGuardado);
		}
	}

	@GetMapping
	public List<Hotel> listarTodosLosHotels() {
		return HotelService.obtenerTodosLosHotels();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Hotel> obtenerHotelPorId(@PathVariable Long id) {
		Hotel Hotel = HotelService.obtenerHotelPorId(id);
		if (Hotel == null) {
			return ResponseEntity.notFound().build();
		}
		{
			return ResponseEntity.ok(Hotel);
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<Hotel> actualizarHotel(@PathVariable Long id, @RequestBody Hotel HotelDetalles) {
		Hotel HotelActualizado = HotelService.actualizarHotel(id, HotelDetalles);
		if (HotelActualizado == null) {
			return ResponseEntity.notFound().build();
		}
		{
			return ResponseEntity.ok(HotelActualizado);
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> eliminarHotel(@PathVariable Long id) {
		if (HotelService.eliminarHotel(id)) {
			return ResponseEntity.ok().build();
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}
