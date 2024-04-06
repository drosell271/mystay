package com.isst.mystay.service;

import com.isst.mystay.model.Cliente;
import com.isst.mystay.model.Habitacion;
import com.isst.mystay.model.Reserva;
import com.isst.mystay.repository.ClienteRepository;
import com.isst.mystay.repository.HabitacionRepository;
import com.isst.mystay.repository.ReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

import org.springframework.lang.Nullable;

@Service
public class ReservaService {

	@Autowired
	private ReservaRepository reservaRepository;

	@Autowired
	private ClienteRepository clienteRepository;

	@Autowired
	private HabitacionRepository habitacionRepository;

	public Optional<Long> buscarIdReservaPorDocumentoYNumeroHabitacion(String documento, int numeroHabitacion) {
		List<Cliente> clientes = clienteRepository.findAll();
		Cliente cliente = clientes.stream()
				.filter(c -> c.getDocumento().equals(documento))
				.findFirst()
				.orElse(null);

		if (cliente == null)
			return Optional.empty();

		List<Habitacion> habitaciones = habitacionRepository.findAll();
		Habitacion habitacion = habitaciones.stream()
				.filter(h -> h.getNumero() == numeroHabitacion)
				.findFirst()
				.orElse(null);

		if (habitacion == null)
			return Optional.empty();

		List<Reserva> reservas = reservaRepository.findAll();
		return reservas.stream()
				.filter(r -> r.getClienteId().equals(cliente.getId())
						&& r.getHabitacionId().equals(habitacion.getId()))
				.findFirst()
				.map(Reserva::getId);
	}

	public Reserva guardarReserva(@Nullable Reserva Reserva) {
		if (Reserva != null) {
			return reservaRepository.save(Reserva);
		}
		return null;
	}

	public List<Reserva> obtenerTodosLosReservas() {
		return reservaRepository.findAll();
	}

	public Reserva obtenerReservaPorId(@Nullable Long id) {
		if (id != null) {
			if (reservaRepository.existsById(id)) {
				return reservaRepository.findById(id).orElse(null);
			} else {
				return null;
			}
		}
		return null;
	}

	public Reserva actualizarReserva(Long id, Reserva ReservaDetalles) {
		if (id == null || ReservaDetalles == null) {
			return null;
		}

		Optional<Reserva> ReservaExistente = reservaRepository.findById(id);

		if (ReservaExistente.isPresent()) {
			Reserva ReservaActualizado = ReservaExistente.get();

			ReservaActualizado.setFechaEntrada(ReservaDetalles.getFechaEntrada());
			ReservaActualizado.setFechaSalida(ReservaDetalles.getFechaSalida());
			ReservaActualizado.setCuenta(ReservaDetalles.getCuenta());
			ReservaActualizado.setClienteId(ReservaDetalles.getClienteId());
			ReservaActualizado.setHabitacionId(ReservaDetalles.getHabitacionId());

			return reservaRepository.save(ReservaActualizado);
		}
		return null;
	}

	public boolean eliminarReserva(@Nullable Long id) {
		if (id != null) {
			if (reservaRepository.existsById(id)) {
				reservaRepository.deleteById(id);
				return true;
			} else {
				return false;
			}
		}
		return false;
	}
}
