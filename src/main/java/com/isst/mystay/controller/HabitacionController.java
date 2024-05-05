package com.isst.mystay.controller;

import com.isst.mystay.model.Habitacion;
import com.isst.mystay.service.HabitacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/habitaciones")
public class HabitacionController {

    @Autowired
    private HabitacionService habitacionService;

    @PostMapping
    public ResponseEntity<Habitacion> agregarHabitacion(@RequestBody Habitacion habitacion) {
        Habitacion habitacionGuardada = habitacionService.guardarHabitacion(habitacion);
        return ResponseEntity.ok(habitacionGuardada);
    }

    @GetMapping
    public List<Habitacion> listarTodasLasHabitaciones() {
        return habitacionService.obtenerTodasLasHabitaciones();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Habitacion> obtenerHabitacionPorId(@PathVariable Integer id) {
        Habitacion habitacion = habitacionService.obtenerHabitacionPorId(id);
        if (habitacion == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(habitacion);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Habitacion> actualizarHabitacion(@PathVariable Integer id,
            @RequestBody Habitacion detallesHabitacion) {
        Habitacion habitacionActualizada = habitacionService.actualizarHabitacion(id, detallesHabitacion);
        if (habitacionActualizada == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(habitacionActualizada);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarHabitacion(@PathVariable Integer id) {
        boolean eliminado = habitacionService.eliminarHabitacion(id);
        if (eliminado) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
