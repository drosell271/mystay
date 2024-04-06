package com.isst.mystay.service;

import com.isst.mystay.model.Servicio;
import com.isst.mystay.repository.ServicioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

import org.springframework.lang.Nullable;

@Service
public class ServicioService {

	@Autowired
	private ServicioRepository ServicioRepository;

	public Servicio guardarServicio(@Nullable Servicio Servicio) {
		if (Servicio != null) {
			return ServicioRepository.save(Servicio);
		}
		return null;
	}

	public List<Servicio> obtenerTodosLosServicios() {
		return ServicioRepository.findAll();
	}

	public Servicio obtenerServicioPorId(@Nullable Long id) {
		if (id != null) {
			if (ServicioRepository.existsById(id)) {
				return ServicioRepository.findById(id).orElse(null);
			} else {
				return null;
			}
		}
		return null;
	}

	public Servicio actualizarServicio(Long id, Servicio ServicioDetalles) {
		if (id == null || ServicioDetalles == null) {
			return null;
		}

		Optional<Servicio> ServicioExistente = ServicioRepository.findById(id);

		if (ServicioExistente.isPresent()) {
			Servicio ServicioActualizado = ServicioExistente.get();

			ServicioActualizado.setNombre(ServicioDetalles.getNombre());
			ServicioActualizado.setDescripcion(ServicioDetalles.getDescripcion());
			ServicioActualizado.setRecursoNecesario(ServicioDetalles.getRecursoNecesario());
			ServicioActualizado.setTipoEmpleado(ServicioDetalles.getTipoEmpleado());
			ServicioActualizado.setDuracion(ServicioDetalles.getDuracion());
			ServicioActualizado.setPrecio(ServicioDetalles.getPrecio());
			ServicioActualizado.setEsPremium(ServicioDetalles.getEsPremium());
			ServicioActualizado.setSatisfecho(ServicioDetalles.getSatisfecho());
			ServicioActualizado.setIdReserva(ServicioDetalles.getIdReserva());
			ServicioActualizado.setIdRecurso(ServicioDetalles.getIdRecurso());
			ServicioActualizado.setIdEmpleado(ServicioDetalles.getIdEmpleado());

			return ServicioRepository.save(ServicioActualizado);
		}
		return null;
	}

	public boolean eliminarServicio(@Nullable Long id) {
		if (id != null) {
			if (ServicioRepository.existsById(id)) {
				ServicioRepository.deleteById(id);
				return true;
			} else {
				return false;
			}
		}
		return false;
	}
}