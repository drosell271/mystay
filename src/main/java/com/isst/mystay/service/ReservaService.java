package com.isst.mystay.service;

import com.isst.mystay.model.Cliente;
import com.isst.mystay.model.Habitacion;
import com.isst.mystay.model.Reserva;
import com.isst.mystay.model.Servicio;
import com.isst.mystay.repository.ClienteRepository;
import com.isst.mystay.repository.HabitacionRepository;
import com.isst.mystay.repository.ReservaRepository;
import com.isst.mystay.repository.ServicioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.Date;

import org.springframework.lang.Nullable;

@Service
public class ReservaService {

	@Autowired
	private ReservaRepository reservaRepository;

	@Autowired
	private ClienteRepository clienteRepository;

	@Autowired
	private ServicioRepository servicioRepository;

	@Autowired
	private HabitacionRepository habitacionRepository;

	public class ResultadoReserva {
		private Integer idReserva;
		private boolean esPremium;
		private Integer clienteId;

		public ResultadoReserva(Integer idReserva, boolean esPremium, Integer clienteId) {
			this.idReserva = idReserva;
			this.esPremium = esPremium;
			this.clienteId = clienteId;
		}

		public Integer getIdReserva() {
			return idReserva;
		}

		public boolean isEsPremium() {
			return esPremium;
		}

		public Integer getClienteId() {
			return clienteId;
		}
	}

	public Optional<ResultadoReserva> buscarIdReservaPorDocumentoYNumeroHabitacion(String documento,
			int numeroHabitacion) {
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
		Reserva reserva = reservas.stream()
				.filter(r -> r.getClienteId().equals(cliente.getId()) && r.getHabitacionId().equals(habitacion.getId()))
				.findFirst()
				.orElse(null);

		if (reserva == null || !reserva.getFechaSalida().after(new Date())
				|| !reserva.getFechaEntrada().before(new Date()))
			return Optional.empty();
		return Optional.of(new ResultadoReserva(reserva.getId(), cliente.getEsPremium(), cliente.getId()));

	}

	public Reserva guardarReserva(@Nullable Reserva reserva) {
		if (reserva != null) {
			return reservaRepository.save(reserva);
		}
		return null;
	}

	public List<Reserva> obtenerTodosLosReservas() {
		return reservaRepository.findAll();
	}

	public Reserva obtenerReservaPorId(@Nullable Integer id) {
		if (id != null) {
			if (reservaRepository.existsById(id)) {
				return reservaRepository.findById(id).orElse(null);
			} else {
				return null;
			}
		}
		return null;
	}

	public Reserva actualizarReserva(Integer id, Reserva ReservaDetalles) {
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

	public boolean eliminarReserva(@Nullable Integer id) {
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

	public Reserva updateReservaTotal(Integer reservaId) {
		// Obtener la reserva existente o lanzar una excepción si no se encuentra
		Reserva reserva = reservaRepository.findById(reservaId)
				.orElseThrow(() -> new RuntimeException("Reserva no encontrada"));

		// Calcular el total de los servicios asociados a la reserva
		double totalServicios = servicioRepository.findByReservaId(reservaId)
				.stream()
				.mapToDouble(Servicio::getPrecio)
				.sum();

		// Sumar el total de los servicios al total actual de la cuenta de la reserva
		double totalActualizado = reserva.getCuenta() + totalServicios;

		// Establecer el nuevo total en la cuenta de la reserva
		reserva.setCuenta(totalActualizado);

		// Guardar y retornar la reserva actualizada
		return reservaRepository.save(reserva);
	}

	public Reserva lateCheckOut(Integer reservaId, Date checkoutTime) {
		Reserva reserva = reservaRepository.findById(reservaId)
				.orElseThrow(() -> new RuntimeException("Reserva no encontrada"));
		reserva.setFechaSalida(checkoutTime);
		return reservaRepository.save(reserva);
	}

	public Reserva lateCheckIn(Integer reservaId, Date checkinTime) {
		Reserva reserva = reservaRepository.findById(reservaId)
				.orElseThrow(() -> new RuntimeException("Reserva no encontrada"));
		reserva.setFechaEntrada(checkinTime);
		return reservaRepository.save(reserva);
	}
}
