package com.ykd.fades.controller.employee;

import com.ykd.fades.model.Employee;
import com.ykd.fades.service.employee.EmployeeRequest;
import com.ykd.fades.service.employee.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/api/v1/auth")
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "localhost:3000")
public class EmployeeController {

    private final EmployeeService employeeService;

    @GetMapping("/getEmployees")
    public ResponseEntity<List<Employee>> getEmployees() {
        return ResponseEntity.ok(employeeService.getEmployeeData());
    }

}
