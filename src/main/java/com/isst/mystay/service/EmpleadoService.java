package com.isst.mystay.service;

import com.isst.mystay.model.Empleado;
import com.isst.mystay.repository.EmpleadoRepository;

import io.micrometer.common.lang.Nullable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class EmpleadoService {

    @Autowired
    private EmpleadoRepository empleadoRepository;

    public Empleado guardarEmpleado(@Nullable Empleado empleado) {
        if (empleado != null) {
            return empleadoRepository.save(empleado);
        }
        return null;
    }

    public List<Empleado> obtenerTodosLosEmpleados() {
        return empleadoRepository.findAll();
    }

    public Empleado obtenerEmpleadoPorId(@Nullable Integer id) {
        Optional<Empleado> empleado = empleadoRepository.findById(id);
        return empleado.orElse(null);
    }

    public Empleado actualizarEmpleado(Integer id, Empleado empleadoDetalles) {
        Optional<Empleado> empleadoExistente = empleadoRepository.findById(id);

        if (empleadoExistente.isPresent()) {
            Empleado empleadoActualizado = empleadoExistente.get();
            empleadoActualizado.setNombre(empleadoDetalles.getNombre());
            empleadoActualizado.setFuncion(empleadoDetalles.getFuncion());
            empleadoActualizado.setTelefono(empleadoDetalles.getTelefono());
            empleadoActualizado.setCorreo(empleadoDetalles.getCorreo());
            empleadoActualizado.setHotelId(empleadoDetalles.getHotelId());
            return empleadoRepository.save(empleadoActualizado);
        }
        return null;
    }

    public boolean eliminarEmpleado(Integer id) {
        if (empleadoRepository.existsById(id)) {
            empleadoRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
