package com.isst.mystay.controller;

import com.isst.mystay.model.Recurso;
import com.isst.mystay.service.RecursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recursos")
public class RecursoController {
    @Autowired
    private RecursoService recursoService;

    @PostMapping
    public ResponseEntity<Recurso> agregarRecurso(@RequestBody Recurso recurso) {
        Recurso recursoGuardado = recursoService.guardarRecurso(recurso);
        if (recursoGuardado != null) {
            return ResponseEntity.ok(recursoGuardado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public List<Recurso> listarTodosLosRecursos() {
        return recursoService.obtenerTodosLosRecursos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Recurso> obtenerRecursoPorId(@PathVariable Long id) {
        Recurso recurso = recursoService.obtenerRecursoPorId(id);
        if (recurso == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(recurso);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Recurso> actualizarRecurso(@PathVariable Long id, @RequestBody Recurso detallesRecurso) {
        Recurso recursoActualizado = recursoService.actualizarRecurso(id, detallesRecurso);
        if (recursoActualizado == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(recursoActualizado);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarRecurso(@PathVariable Long id) {
        if (recursoService.eliminarRecurso(id)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
