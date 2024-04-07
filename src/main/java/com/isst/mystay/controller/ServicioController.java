package com.isst.mystay.controller;

import com.isst.mystay.model.Servicio;
import com.isst.mystay.service.ServicioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/servicios")
public class ServicioController {
	@Autowired
	private ServicioService ServicioService;

	@PostMapping
	public ResponseEntity<Servicio> agregarServicio(@RequestBody Servicio servicio) {
		System.out.println(servicio);
		Servicio servicioGuardado = ServicioService.guardarServicio(servicio);
		if (servicioGuardado == null) {
			return ResponseEntity.badRequest().build();
		} else {
			return ResponseEntity.ok(servicioGuardado);
		}
	}

	@GetMapping
	public List<Servicio> listarTodosLosServicios() {
		return ServicioService.obtenerTodosLosServicios();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Servicio> obtenerServicioPorId(@PathVariable Long id) {
		Servicio Servicio = ServicioService.obtenerServicioPorId(id);
		if (Servicio == null) {
			return ResponseEntity.notFound().build();
		}
		{
			return ResponseEntity.ok(Servicio);
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<Servicio> actualizarServicio(@PathVariable Long id, @RequestBody Servicio ServicioDetalles) {
		Servicio ServicioActualizado = ServicioService.actualizarServicio(id, ServicioDetalles);
		if (ServicioActualizado == null) {
			return ResponseEntity.notFound().build();
		}
		{
			return ResponseEntity.ok(ServicioActualizado);
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> eliminarServicio(@PathVariable Long id) {
		if (ServicioService.eliminarServicio(id)) {
			return ResponseEntity.ok().build();
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}
