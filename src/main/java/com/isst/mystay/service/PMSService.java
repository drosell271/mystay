package com.isst.mystay.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Arrays;
import java.util.List;

class Recurso {
	String nombre;
	List<Boolean> diasAbierto;
	List<LocalTime> horaApertura;
	List<LocalTime> horaSalida;

	Recurso(String nombre, List<Boolean> diasAbierto, List<LocalTime> horaApertura, List<LocalTime> horaSalida) {
		this.nombre = nombre;
		this.diasAbierto = diasAbierto;
		this.horaApertura = horaApertura;
		this.horaSalida = horaSalida;
	}
}

class Empleado {
	String nombre;
	String tipoEmpleado;
	List<Boolean> diasTrabaja;
	List<LocalTime> comienzoTurno;
	List<LocalTime> finalTurno;

	Empleado(String nombre, String tipoEmpleado, List<Boolean> diasTrabaja, List<LocalTime> comienzoTurno,
			List<LocalTime> finalTurno) {
		this.nombre = nombre;
		this.tipoEmpleado = tipoEmpleado;
		this.diasTrabaja = diasTrabaja;
		this.comienzoTurno = comienzoTurno;
		this.finalTurno = finalTurno;
	}
}

public class PMSService {

	public String checkPMS(String recursoNecesario, String tipoEmpleado) {
		// System.out.println("Entrando en PMS con recurso: " + recursoNecesario + " y
		// empleado: " + tipoEmpleado + ".");

		int hoyIndex = LocalDate.now().getDayOfWeek().getValue() - 1;

		LocalTime horaActual = LocalTime.now();
		// System.out.println("Hora Actual: " + horaActual);

		List<Recurso> recursos = Arrays.asList(
				new Recurso("COCINA", Arrays.asList(true, true, true, true, true, true, true),
						Arrays.asList(LocalTime.of(6, 0), LocalTime.of(6, 0), LocalTime.of(6, 0), LocalTime.of(6, 0),
								LocalTime.of(6, 0), LocalTime.of(6, 0), LocalTime.of(6, 0)),
						Arrays.asList(LocalTime.of(23, 0), LocalTime.of(23, 0), LocalTime.of(23, 0),
								LocalTime.of(23, 0), LocalTime.of(23, 0), LocalTime.of(23, 0), LocalTime.of(23, 0))),
				new Recurso("CAFETERIA", Arrays.asList(true, true, true, true, true, false, true),
						Arrays.asList(LocalTime.of(8, 0), LocalTime.of(8, 0), LocalTime.of(8, 0), LocalTime.of(8, 0),
								LocalTime.of(8, 0), LocalTime.MIDNIGHT, LocalTime.of(8,
										0)),
						Arrays.asList(LocalTime.of(20, 0), LocalTime.of(20, 0), LocalTime.of(20, 0),
								LocalTime.of(20, 0), LocalTime.of(20, 0), LocalTime.MIDNIGHT, LocalTime.of(23,
										59))),
				new Recurso("HABITACIONES", Arrays.asList(true, true, true, true, true, true, true),
						Arrays.asList(LocalTime.of(0, 0), LocalTime.of(0, 0), LocalTime.of(0, 0), LocalTime.of(0, 0),
								LocalTime.of(0, 0), LocalTime.of(0, 0), LocalTime.of(0, 0)),
						Arrays.asList(LocalTime.of(23, 59), LocalTime.of(23, 59), LocalTime.of(23, 59),
								LocalTime.of(23, 59), LocalTime.of(23, 59), LocalTime.of(23, 59),
								LocalTime.of(23, 59))),
				new Recurso("INCIDENCIAS", Arrays.asList(true, true, true, true, true, true, true),
						Arrays.asList(LocalTime.of(0, 0), LocalTime.of(0, 0), LocalTime.of(0, 0), LocalTime.of(0, 0),
								LocalTime.of(0, 0), LocalTime.of(0, 0), LocalTime.of(0, 0)),
						Arrays.asList(LocalTime.of(23, 59), LocalTime.of(23, 59), LocalTime.of(23, 59),
								LocalTime.of(23, 59), LocalTime.of(23, 59), LocalTime.of(23, 59),
								LocalTime.of(23, 59))),
				new Recurso("TRANSFER", Arrays.asList(false, true, true, true, true, true, false),
						Arrays.asList(LocalTime.MIDNIGHT, LocalTime.of(4, 0), LocalTime.of(4, 0), LocalTime.of(4, 0),
								LocalTime.of(4, 0), LocalTime.of(4, 0), LocalTime.MIDNIGHT),
						Arrays.asList(LocalTime.MIDNIGHT, LocalTime.of(16, 0), LocalTime.of(16, 0), LocalTime.of(16, 0),
								LocalTime.of(16, 0), LocalTime.of(16, 0), LocalTime.MIDNIGHT))

		);

		List<Empleado> empleados = Arrays.asList(
				new Empleado("JUAN", "CAMARERO", Arrays.asList(true, true, true, true, true, false, true),
						Arrays.asList(LocalTime.of(6, 0), LocalTime.of(6, 0), LocalTime.of(6, 0), LocalTime.of(6, 0),
								LocalTime.of(6, 0), LocalTime.of(6, 0), LocalTime.of(6, 0)),
						Arrays.asList(LocalTime.of(14, 0), LocalTime.of(14, 0), LocalTime.of(14, 0),
								LocalTime.of(14, 0), LocalTime.of(14, 0), LocalTime.of(14, 0))),

				new Empleado("JORGE", "CAMARERO", Arrays.asList(true, true, false, false, true, true, true),
						Arrays.asList(LocalTime.of(14, 0), LocalTime.of(14, 0), LocalTime.MIDNIGHT, LocalTime.MIDNIGHT,
								LocalTime.of(14, 0), LocalTime.of(14, 0), LocalTime.of(14, 0)),
						Arrays.asList(LocalTime.of(22, 0), LocalTime.of(22, 0), LocalTime.MIDNIGHT, LocalTime.MIDNIGHT,
								LocalTime.of(22, 0), LocalTime.of(22, 0), LocalTime.of(23, 59))),

				new Empleado("PABLO", "CAMARERO", Arrays.asList(false, false, true, true, false, true, false),
						Arrays.asList(LocalTime.MIDNIGHT, LocalTime.MIDNIGHT, LocalTime.of(22, 0), LocalTime.of(22, 0),
								LocalTime.MIDNIGHT, LocalTime.of(22, 0), LocalTime.MIDNIGHT),
						Arrays.asList(LocalTime.MIDNIGHT, LocalTime.MIDNIGHT, LocalTime.of(6, 0), LocalTime.of(6, 0),
								LocalTime.MIDNIGHT, LocalTime.of(6, 0), LocalTime.MIDNIGHT)),

				new Empleado("MARIA", "HABITACIONES", Arrays.asList(true, true, true, true, true, false, false),
						Arrays.asList(LocalTime.of(8, 0), LocalTime.of(8, 0), LocalTime.of(8, 0), LocalTime.of(8, 0),
								LocalTime.of(8, 0), LocalTime.MIDNIGHT, LocalTime.MIDNIGHT),
						Arrays.asList(LocalTime.of(16, 0), LocalTime.of(16, 0), LocalTime.of(16, 0),
								LocalTime.of(16, 0),
								LocalTime.of(16, 0), LocalTime.MIDNIGHT, LocalTime.MIDNIGHT)),

				new Empleado("DAVID", "MANTENIMIENTO", Arrays.asList(true, true, false, true, false, true, true),
						Arrays.asList(LocalTime.of(9, 0), LocalTime.of(9, 0), LocalTime.MIDNIGHT, LocalTime.of(9, 0),
								LocalTime.MIDNIGHT, LocalTime.of(9, 0), LocalTime.of(9, 0)),
						Arrays.asList(LocalTime.of(17, 0), LocalTime.of(17, 0), LocalTime.MIDNIGHT, LocalTime.of(17, 0),
								LocalTime.MIDNIGHT, LocalTime.of(17, 0), LocalTime.of(17, 0))),

				new Empleado("MARCOS", "RECEPCION", Arrays.asList(true, false, true, true, true, true, false),
						Arrays.asList(LocalTime.of(7, 0), LocalTime.MIDNIGHT, LocalTime.of(7, 0), LocalTime.of(7, 0),
								LocalTime.of(7, 0), LocalTime.of(7, 0), LocalTime.MIDNIGHT),
						Arrays.asList(LocalTime.of(15, 0), LocalTime.MIDNIGHT, LocalTime.of(15, 0), LocalTime.of(15, 0),
								LocalTime.of(15, 0), LocalTime.of(15, 0), LocalTime.MIDNIGHT)),

				new Empleado("DIEGO", "HABITACIONES", Arrays.asList(false, true, true, true, true, true, false),
						Arrays.asList(LocalTime.MIDNIGHT, LocalTime.of(9, 0), LocalTime.of(9, 0), LocalTime.of(9, 0),
								LocalTime.of(9, 0), LocalTime.of(9, 0), LocalTime.MIDNIGHT),
						Arrays.asList(LocalTime.MIDNIGHT, LocalTime.of(17, 0), LocalTime.of(17, 0), LocalTime.of(17, 0),
								LocalTime.of(17, 0), LocalTime.of(17, 0), LocalTime.MIDNIGHT)),

				new Empleado("IRENE", "RECEPCION", Arrays.asList(true, true, true, false, false, true, true),
						Arrays.asList(LocalTime.of(15, 0), LocalTime.of(15, 0), LocalTime.of(15, 0), LocalTime.MIDNIGHT,
								LocalTime.MIDNIGHT, LocalTime.of(15, 0), LocalTime.of(15, 0)),
						Arrays.asList(LocalTime.of(23, 0), LocalTime.of(23, 0), LocalTime.of(23, 0), LocalTime.MIDNIGHT,
								LocalTime.MIDNIGHT, LocalTime.of(23, 0), LocalTime.of(23, 0))),

				new Empleado("PEDRO", "HABITACIONES", Arrays.asList(true, true, true, true, false, false, true),
						Arrays.asList(LocalTime.of(8, 0), LocalTime.of(8, 0), LocalTime.of(8, 0), LocalTime.of(8, 0),
								LocalTime.MIDNIGHT, LocalTime.MIDNIGHT, LocalTime.of(8, 0)),
						Arrays.asList(LocalTime.of(16, 0), LocalTime.of(16, 0), LocalTime.of(16, 0),
								LocalTime.of(16, 0),
								LocalTime.MIDNIGHT, LocalTime.MIDNIGHT, LocalTime.of(23, 59))),

				new Empleado("LUIS", "MANTENIMIENTO", Arrays.asList(false, false, true, true, true, true, false),
						Arrays.asList(LocalTime.MIDNIGHT, LocalTime.MIDNIGHT, LocalTime.of(9, 0), LocalTime.of(9, 0),
								LocalTime.of(9, 0), LocalTime.of(9, 0), LocalTime.MIDNIGHT),
						Arrays.asList(LocalTime.MIDNIGHT, LocalTime.MIDNIGHT, LocalTime.of(17, 0), LocalTime.of(17, 0),
								LocalTime.of(17, 0), LocalTime.of(17, 0), LocalTime.MIDNIGHT)));

		for (Recurso recurso : recursos) {
			if (recurso.nombre.equals(recursoNecesario) && recurso.diasAbierto.get(hoyIndex)
					&& horaActual.isAfter(recurso.horaApertura.get(hoyIndex))
					&& horaActual.isBefore(recurso.horaSalida.get(hoyIndex))) {
				// System.out.println("Recurso " + recurso.nombre + " encontrado y abierto.");
				for (Empleado empleado : empleados) {
					if (empleado.tipoEmpleado.equals(tipoEmpleado) && empleado.diasTrabaja.get(hoyIndex)
							&& horaActual.isAfter(empleado.comienzoTurno.get(hoyIndex))
							&& horaActual.isBefore(empleado.finalTurno.get(hoyIndex))) {
						// System.out.println("Empleado " + empleado.nombre + " encontrado y
						// trabajando.");
						return empleado.nombre;
					}
				}
				// System.out.println("No se encontró un empleado disponible para el recurso " +
				// recursoNecesario + ".");
				return null;
			}
		}

		// System.out.println("No se encontró el recurso solicitado o no está abierto en
		// este momento.");
		return null;
	}

	public static void main(String[] args) {
		PMSService pmsService = new PMSService();
		String result = pmsService.checkPMS("COCINA", "CAMARERO");
		if (result != null) {
			// System.out.println("Resultado: " + result);
		} else {
			// System.out.println("No se pudo encontrar un empleado adecuado.");
		}
	}
}
