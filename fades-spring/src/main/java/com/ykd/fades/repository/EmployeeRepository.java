package com.ykd.fades.repository;

import com.ykd.fades.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    Optional<Employee> findByEmail(String email);

    @Query("SELECT e FROM Employee e WHERE e.id = ?1")
    List<Employee> findListById(Integer employeeId);


}
