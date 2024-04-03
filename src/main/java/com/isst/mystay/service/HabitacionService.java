package com.isst.mystay.service;

import com.isst.mystay.model.Habitacion;
import com.isst.mystay.repository.HabitacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class HabitacionService {

    @Autowired
    private HabitacionRepository habitacionRepository;

    public Habitacion guardarHabitacion(Habitacion habitacion) {
        return habitacionRepository.save(habitacion);
    }

    public List<Habitacion> obtenerTodasLasHabitaciones() {
        return habitacionRepository.findAll();
    }

    public Habitacion obtenerHabitacionPorId(long id) {
        Optional<Habitacion> habitacion = habitacionRepository.findById(id);
        return habitacion.orElse(null);
    }

    public Habitacion actualizarHabitacion(long id, Habitacion detallesHabitacion) {
        Optional<Habitacion> habitacionExistente = habitacionRepository.findById(id);

        if (habitacionExistente.isPresent()) {
            Habitacion habitacionActualizada = habitacionExistente.get();
            habitacionActualizada.setNumero(detallesHabitacion.getNumero());
            habitacionActualizada.setTipo(detallesHabitacion.getTipo());
            habitacionActualizada.setNumCamas(detallesHabitacion.getNumCamas());
            habitacionActualizada.setPrecio(detallesHabitacion.getPrecio());
            habitacionActualizada.setHotelId(detallesHabitacion.getHotelId());
            return habitacionRepository.save(habitacionActualizada);
        }
        return null;
    }

    public boolean eliminarHabitacion(long id) {
        if (habitacionRepository.existsById(id)) {
            habitacionRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
