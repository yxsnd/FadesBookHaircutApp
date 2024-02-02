package com.ykd.fades.controller.book;

import com.ykd.fades.model.Appointment;
import com.ykd.fades.service.book.BookAppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/auth/bookAppointment")
@RequiredArgsConstructor
@CrossOrigin(origins = "localhost:3000")
public class BookAppointmentController {

    @Autowired
    BookAppointmentService bookAppointmentService;

    @PostMapping("/book")
    public ResponseEntity<Appointment> bookAppointment(@RequestBody BookAppointmentRequest request){
        return  ResponseEntity.ok(bookAppointmentService.book(request));
    }

}
