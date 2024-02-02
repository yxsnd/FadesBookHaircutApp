package com.ykd.fades.service.book;

import com.ykd.fades.controller.book.BookAppointmentRequest;
import com.ykd.fades.model.Appointment;
import com.ykd.fades.model.Employee;
import com.ykd.fades.repository.AppointmentRepository;
import com.ykd.fades.service.employee.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BookAppointmentService {

    private final AppointmentRepository appointmentRepository;
    private final EmployeeService employeeService;


    public Appointment book(BookAppointmentRequest request) {

        System.out.println(request);

//        List<Employee> foundEmployee = new ArrayList<Employee>();
//        try {
//            foundEmployee = (employeeService.getEmployeeByEmployeeId(request.getEmployee().getId()));
//        }
//        catch (Exception error) {
//            System.out.println(error);
//        }
        var bookAppointment = Appointment.builder()
                .employeeId(request.getEmployeeId())
                .date(request.getDate())
                .timeSlotsBooked(request.getTimeSlotsBooked())
                .memo(request.getMemo())
                .build();

        appointmentRepository.save(bookAppointment);

        return bookAppointment;

        //appointmentRepository.findAppointmentsForEmployee(request.getEmployeeId());

    }
}
