package com.ykd.fades.service.appointment;

import com.ykd.fades.controller.appointment.AllAppointmentsRequest;
import com.ykd.fades.controller.appointment.BookAppointmentRequest;
import com.ykd.fades.model.Appointment;
import com.ykd.fades.repository.AppointmentRepository;
import com.ykd.fades.service.employee.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookAppointmentService {

    private final AppointmentRepository appointmentRepository;
    private final EmployeeService employeeService;


    public Appointment book(BookAppointmentRequest request) {

        boolean dupFound = false;
        // validate if there is a booking for that employee on that date at that time
        // get all the appointments for the employee
        List<Appointment> listOfAppointments = appointmentRepository.findAppointmentsForEmployee(request.getEmployeeId());
        for (int i = 0; i < listOfAppointments.size(); i++) {
            if (request.getDate().equals(listOfAppointments.get(i).getDate()) && request.getTimeSlotsBooked().equals(listOfAppointments.get(i).getTimeSlotsBooked())) {
                dupFound = true;
                break;
            }
        }

        System.out.println(dupFound);
        if (!dupFound) {
            Appointment bookAppointment = Appointment.builder()
                    .employeeId(request.getEmployeeId())
                    .date(request.getDate())
                    .timeSlotsBooked(request.getTimeSlotsBooked())
                    .memo(request.getMemo())
                    .build();
            appointmentRepository.save(bookAppointment);
            return bookAppointment;
        } else {
            return null;


        }


    }

    public List<Appointment> getAppointmentsByEmployeeId(Integer employeeId) {
        List<Appointment> listOfAppointments = appointmentRepository.findAppointmentsForEmployee(employeeId);
        System.out.println(listOfAppointments);
        for (Appointment appointment : listOfAppointments) {
            System.out.println(appointment);
        }
        {

        }
        return appointmentRepository.findAppointmentsForEmployee(employeeId);
    }
}
