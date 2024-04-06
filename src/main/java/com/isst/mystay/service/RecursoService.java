package com.isst.mystay.service;

import com.isst.mystay.model.Recurso;
import com.isst.mystay.repository.RecursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

import org.springframework.lang.Nullable;

@Service
public class RecursoService {

    @Autowired
    private RecursoRepository recursoRepository;

    public Recurso guardarRecurso(@Nullable Recurso recurso) {
        if (recurso != null) {
            return recursoRepository.save(recurso);
        }
        return null;
    }

    public List<Recurso> obtenerTodosLosRecursos() {
        return recursoRepository.findAll();
    }

    public Recurso obtenerRecursoPorId(@Nullable Long id) {
        if (id != null) {
            Optional<Recurso> recurso = recursoRepository.findById(id);
            return recurso.orElse(null);
        }
        return null;
    }

    public Recurso actualizarRecurso(Long id, Recurso detallesRecurso) {
        if (id == null || detallesRecurso == null) {
            return null;
        }

        Optional<Recurso> recursoExistente = recursoRepository.findById(id);

        if (recursoExistente.isPresent()) {
            Recurso recursoActualizado = recursoExistente.get();
            recursoActualizado.setNombre(detallesRecurso.getNombre());
            recursoActualizado.setHotelId(detallesRecurso.getHotelId());
            return recursoRepository.save(recursoActualizado);
        }
        return null;
    }

    public boolean eliminarRecurso(@Nullable Long id) {
        if (id != null && recursoRepository.existsById(id)) {
            recursoRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
