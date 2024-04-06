package com.isst.mystay.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Arrays;
import java.util.List;

import com.isst.mystay.model.Recurso;

public class PMSService {

    public String checkPMS(String recursoNecesario, String tipoEmpleado) {
        int hoyIndex = LocalDate.now().getDayOfWeek().getValue() - 1;

        if (hoyIndex == -1) {
            hoyIndex = 6; // Ajuste para Domingo
        }

        LocalTime horaActual = LocalTime.now();

        class Recurso {
            String nombre;
            List<Boolean> diasAbierto;
            List<LocalTime> horaApertura;
            List<LocalTime> horaSalida;

            Recurso(String nombre, List<Boolean> diasAbierto, List<LocalTime> horaApertura,
                    List<LocalTime> horaSalida) {
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

        // Empleados y recursos con los que cuenta el PMS

        List<Recurso> recursos = Arrays.asList(
                new Recurso("COCINA", Arrays.asList(true, true, true, true, true, false, false),
                        Arrays.asList(LocalTime.of(7, 0), LocalTime.of(7, 0), LocalTime.of(7, 0), LocalTime.of(7, 0),
                                LocalTime.of(7, 0), LocalTime.MIDNIGHT, LocalTime.MIDNIGHT),
                        Arrays.asList(LocalTime.of(22, 0), LocalTime.of(22, 0), LocalTime.of(22, 0),
                                LocalTime.of(22, 0), LocalTime.of(22, 0), LocalTime.MIDNIGHT, LocalTime.MIDNIGHT)),
                new Recurso("CAFETERIA", Arrays.asList(true, true, true, true, true, true, true),
                        Arrays.asList(LocalTime.of(6, 0), LocalTime.of(6, 0), LocalTime.of(6, 0), LocalTime.of(6, 0),
                                LocalTime.of(6, 0), LocalTime.of(6, 0), LocalTime.of(6, 0)),
                        Arrays.asList(LocalTime.of(22, 0), LocalTime.of(22, 0), LocalTime.of(22, 0),
                                LocalTime.of(22, 0), LocalTime.of(22, 0), LocalTime.of(22, 0), LocalTime.of(22, 0))),
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
                        Arrays.asList(LocalTime.MIDNIGHT, LocalTime.of(12, 0), LocalTime.of(12, 0), LocalTime.of(12, 0),
                                LocalTime.of(12, 0), LocalTime.of(12, 0), LocalTime.MIDNIGHT)));

        List<Empleado> empleados = Arrays.asList(

                new Empleado("JUAN", "CAMARERO", Arrays.asList(true, true, true, true, true, false, false),
                        Arrays.asList(LocalTime.of(6, 0), LocalTime.of(6, 0), LocalTime.of(6, 0), LocalTime.of(6, 0),
                                LocalTime.of(6, 0), LocalTime.MIDNIGHT, LocalTime.MIDNIGHT),
                        Arrays.asList(LocalTime.of(14, 0), LocalTime.of(14, 0), LocalTime.of(14, 0),
                                LocalTime.of(14, 0), LocalTime.of(14, 0), LocalTime.MIDNIGHT, LocalTime.MIDNIGHT)),
                new Empleado("JORGE", "CAMARERO", Arrays.asList(true, true, true, false, false, false, false),
                        Arrays.asList(LocalTime.of(14, 0), LocalTime.of(14, 0), LocalTime.of(14, 0), LocalTime.MIDNIGHT,
                                LocalTime.MIDNIGHT, LocalTime.MIDNIGHT, LocalTime.MIDNIGHT),
                        Arrays.asList(LocalTime.of(22, 0), LocalTime.of(22, 0), LocalTime.of(22, 0), LocalTime.MIDNIGHT,
                                LocalTime.MIDNIGHT, LocalTime.MIDNIGHT, LocalTime.MIDNIGHT)),
                new Empleado("PABLO", "CAMARERO", Arrays.asList(false, false, false, true, true, true, false),
                        Arrays.asList(LocalTime.of(18, 0), LocalTime.MIDNIGHT, LocalTime.MIDNIGHT, LocalTime.of(18, 0),
                                LocalTime.of(18, 0), LocalTime.of(18, 0), LocalTime.MIDNIGHT),
                        Arrays.asList(LocalTime.of(2, 0), LocalTime.MIDNIGHT, LocalTime.MIDNIGHT, LocalTime.of(2, 0),
                                LocalTime.of(2, 0), LocalTime.of(2, 0), LocalTime.MIDNIGHT)),
                new Empleado("MARIA", "HABITACIONES", Arrays.asList(true, true, true, true, true, false, false),
                        Arrays.asList(LocalTime.of(8, 0), LocalTime.of(8, 0), LocalTime.of(8, 0), LocalTime.of(8, 0),
                                LocalTime.of(8, 0), LocalTime.MIDNIGHT, LocalTime.MIDNIGHT),
                        Arrays.asList(LocalTime.of(16, 0), LocalTime.of(16, 0), LocalTime.of(16, 0),
                                LocalTime.of(16, 0), LocalTime.of(16, 0), LocalTime.MIDNIGHT, LocalTime.MIDNIGHT)),
                new Empleado("DAVID", "MANTENIMIENTO", Arrays.asList(true, false, true, false, true, true, false),
                        Arrays.asList(LocalTime.of(9, 0), LocalTime.MIDNIGHT, LocalTime.of(9, 0), LocalTime.MIDNIGHT,
                                LocalTime.of(9, 0), LocalTime.of(9, 0), LocalTime.MIDNIGHT),
                        Arrays.asList(LocalTime.of(17, 0), LocalTime.MIDNIGHT, LocalTime.of(17, 0), LocalTime.MIDNIGHT,
                                LocalTime.of(17, 0), LocalTime.of(17, 0), LocalTime.MIDNIGHT)),
                new Empleado("MARCOS", "RECEPCION", Arrays.asList(true, true, true, true, true, false, true),
                        Arrays.asList(LocalTime.of(7, 0), LocalTime.of(7, 0), LocalTime.of(7, 0), LocalTime.of(7, 0),
                                LocalTime.of(7, 0), LocalTime.MIDNIGHT, LocalTime.of(7, 0)),
                        Arrays.asList(LocalTime.of(15, 0), LocalTime.of(15, 0), LocalTime.of(15, 0),
                                LocalTime.of(15, 0), LocalTime.of(15, 0), LocalTime.MIDNIGHT, LocalTime.of(15, 0))),
                new Empleado("DIEGO", "HABITACIONES", Arrays.asList(false, true, true, true, true, true, false),
                        Arrays.asList(LocalTime.MIDNIGHT, LocalTime.of(9, 0), LocalTime.of(9, 0), LocalTime.of(9, 0),
                                LocalTime.of(9, 0), LocalTime.of(9, 0), LocalTime.MIDNIGHT),
                        Arrays.asList(LocalTime.MIDNIGHT, LocalTime.of(17, 0), LocalTime.of(17, 0), LocalTime.of(17, 0),
                                LocalTime.of(17, 0), LocalTime.of(17, 0), LocalTime.MIDNIGHT)),
                new Empleado("IRENE", "RECEPCION", Arrays.asList(true, false, false, true, true, true, true),
                        Arrays.asList(LocalTime.of(15, 0), LocalTime.MIDNIGHT, LocalTime.MIDNIGHT, LocalTime.of(15, 0),
                                LocalTime.of(15, 0), LocalTime.of(15, 0), LocalTime.of(15, 0)),
                        Arrays.asList(LocalTime.of(23, 0), LocalTime.MIDNIGHT, LocalTime.MIDNIGHT, LocalTime.of(23, 0),
                                LocalTime.of(23, 0), LocalTime.of(23, 0), LocalTime.of(23, 0))),
                new Empleado("PEDRO", "HABITACIONES", Arrays.asList(true, true, true, false, false, true, true),
                        Arrays.asList(LocalTime.of(8, 0), LocalTime.of(8, 0), LocalTime.of(8, 0), LocalTime.MIDNIGHT,
                                LocalTime.MIDNIGHT, LocalTime.of(8, 0), LocalTime.of(8, 0)),
                        Arrays.asList(LocalTime.of(16, 0), LocalTime.of(16, 0), LocalTime.of(16, 0), LocalTime.MIDNIGHT,
                                LocalTime.MIDNIGHT, LocalTime.of(16, 0), LocalTime.of(16, 0))),
                new Empleado("LUIS", "MANTENIMIENTO", Arrays.asList(true, true, false, true, false, false, true),
                        Arrays.asList(LocalTime.of(10, 0), LocalTime.of(10, 0), LocalTime.MIDNIGHT, LocalTime.of(10, 0),
                                LocalTime.MIDNIGHT, LocalTime.MIDNIGHT, LocalTime.of(10, 0)),
                        Arrays.asList(LocalTime.of(18, 0), LocalTime.of(18, 0), LocalTime.MIDNIGHT, LocalTime.of(18, 0),
                                LocalTime.MIDNIGHT, LocalTime.MIDNIGHT, LocalTime.of(18, 0))));

        for (Recurso recurso : recursos) {
            if (recurso.nombre.equals(recursoNecesario) && recurso.diasAbierto.get(hoyIndex)
                    && horaActual.isAfter(recurso.horaApertura.get(hoyIndex))
                    && horaActual.isBefore(recurso.horaSalida.get(hoyIndex))) {

                for (Empleado empleado : empleados) {
                    if (empleado.tipoEmpleado.equals(tipoEmpleado) && empleado.diasTrabaja.get(hoyIndex)
                            && horaActual.isAfter(empleado.comienzoTurno.get(hoyIndex))
                            && horaActual.isBefore(empleado.finalTurno.get(hoyIndex))) {

                        return empleado.nombre;
                    }
                }
            }
        }

        return null; // No encontró recurso disponible o empleado para el servicio
    }

}
