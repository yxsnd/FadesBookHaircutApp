package com.ykd.fades.service.employee;

import com.ykd.fades.model.Employee;
import com.ykd.fades.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmployeeService {

    private final EmployeeRepository employeeRepository;


    public List<Employee> getEmployeeData() {

        return employeeRepository.findAll();

    }

    public List<Employee> getEmployeeByEmployeeId(Integer employeeId) {
        return employeeRepository.findListById(employeeId);
    }
}
