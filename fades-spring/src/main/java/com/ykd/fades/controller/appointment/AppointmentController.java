package com.ykd.fades.controller.appointment;

import com.ykd.fades.model.Appointment;
import com.ykd.fades.service.appointment.BookAppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "localhost:3000")
public class AppointmentController {


    private final BookAppointmentService bookAppointmentService;

    @GetMapping("/getAppointments")
    public ResponseEntity<List<Appointment>> getAppointments(@RequestParam("employeeId") Integer request) {
        return ResponseEntity.ok(bookAppointmentService.getAppointmentsByEmployeeId(request));
    }
}
