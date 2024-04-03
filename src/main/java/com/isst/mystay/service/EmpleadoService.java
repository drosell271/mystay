package com.isst.mystay.service;

import com.isst.mystay.model.Empleado;
import com.isst.mystay.repository.EmpleadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class EmpleadoService {

    @Autowired
    private EmpleadoRepository empleadoRepository;

    public Empleado guardarEmpleado(Empleado empleado) {
        return empleadoRepository.save(empleado);
    }

    public List<Empleado> obtenerTodosLosEmpleados() {
        return empleadoRepository.findAll();
    }

    public Empleado obtenerEmpleadoPorId(long id) {
        Optional<Empleado> empleado = empleadoRepository.findById(id);
        return empleado.orElse(null);
    }

    public Empleado actualizarEmpleado(long id, Empleado empleadoDetalles) {
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

    public boolean eliminarEmpleado(long id) {
        if (empleadoRepository.existsById(id)) {
            empleadoRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
