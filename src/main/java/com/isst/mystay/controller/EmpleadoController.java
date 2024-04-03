package com.isst.mystay.controller;

import com.isst.mystay.model.Empleado;
import com.isst.mystay.service.EmpleadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/empleados")
public class EmpleadoController {

    @Autowired
    private EmpleadoService empleadoService;

    @PostMapping
    public ResponseEntity<Empleado> agregarEmpleado(@RequestBody Empleado empleado) {
        Empleado empleadoGuardado = empleadoService.guardarEmpleado(empleado);
        return ResponseEntity.ok(empleadoGuardado);
    }

    @GetMapping
    public List<Empleado> listarTodosLosEmpleados() {
        return empleadoService.obtenerTodosLosEmpleados();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Empleado> obtenerEmpleadoPorId(@PathVariable long id) {
        Empleado empleado = empleadoService.obtenerEmpleadoPorId(id);
        if (empleado == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(empleado);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Empleado> actualizarEmpleado(@PathVariable long id, @RequestBody Empleado empleadoDetalles) {
        Empleado empleadoActualizado = empleadoService.actualizarEmpleado(id, empleadoDetalles);
        if (empleadoActualizado == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(empleadoActualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarEmpleado(@PathVariable long id) {
        boolean eliminado = empleadoService.eliminarEmpleado(id);
        if (eliminado) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
