package com.isst.mystay.service;

import com.isst.mystay.model.Servicio;
import com.isst.mystay.model.Recurso;
import com.isst.mystay.model.Empleado;
import com.isst.mystay.repository.ServicioRepository;
import com.isst.mystay.repository.RecursoRepository;
import com.isst.mystay.repository.EmpleadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.lang.Nullable;

@Service
public class ServicioService {

	@Autowired
	private ServicioRepository servicioRepository;

	@Autowired
	private RecursoRepository recursoRepository;

	@Autowired
	private EmpleadoRepository empleadoRepository;

	@Autowired
	private ReservaService ReservaService;

	public Servicio guardarServicio(@Nullable Servicio Servicio) {
		com.isst.mystay.service.PMSService pmsService = new PMSService();
		// System.out.println("Entrando en guardar servicio");
		if (Servicio != null) {
			// System.out.println("Preparando para checkear PMS");
			String temp = pmsService.checkPMS(Servicio.getRecursoNecesario(), Servicio.getTipoEmpleado());
			// System.out.println("Resultado del PMS: " + temp);
			if (temp != null) {
				// System.out.println("Comprobando recurso...");
				List<Recurso> recursos = recursoRepository.findAll();
				Recurso recurso = recursos.stream()
						.filter(c -> c.getNombre().equals(Servicio.getRecursoNecesario()))
						.findFirst()
						.orElse(null);
				// System.out.println("Recurso: " + recurso);
				Servicio.setIdRecurso(recurso.getId());

				// System.out.println("Comprobando empleado...");
				List<Empleado> empleados = empleadoRepository.findAll();
				Empleado empleado = empleados.stream()
						.filter(c -> c.getNombre().equals(temp))
						.findFirst()
						.orElse(null);
				Servicio.setIdEmpleado(empleado.getId());
				// System.out.println("Empleado: " + empleado);

				if (recurso == null || empleado == null)
					return null;

				ReservaService.updateReservaTotal(Servicio.getIdReserva());
				return servicioRepository.save(Servicio);
			}
			return null;
		}
		return null;
	}

	public List<Servicio> obtenerTodosLosServicios() {
		return servicioRepository.findAll();
	}

	public Servicio obtenerServicioPorId(@Nullable Integer id) {
		if (id != null) {
			if (servicioRepository.existsById(id)) {
				return servicioRepository.findById(id).orElse(null);
			} else {
				return null;
			}
		}
		return null;
	}

	public Servicio actualizarServicio(Integer id, Servicio ServicioDetalles) {
		if (id == null || ServicioDetalles == null) {
			return null;
		}

		Optional<Servicio> ServicioExistente = servicioRepository.findById(id);

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

			return servicioRepository.save(ServicioActualizado);
		}
		return null;
	}

	public boolean eliminarServicio(@Nullable Integer id) {
		if (id != null) {
			if (servicioRepository.existsById(id)) {
				servicioRepository.deleteById(id);
				return true;
			} else {
				return false;
			}
		}
		return false;
	}

}
