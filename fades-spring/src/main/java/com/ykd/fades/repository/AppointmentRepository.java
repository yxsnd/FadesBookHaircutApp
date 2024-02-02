package com.ykd.fades.repository;

import com.ykd.fades.model.Appointment;
import com.ykd.fades.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {
//    @Query("SELECT a FROM Appointment a WHERE a.employee_id = ?1")
//    List<Appointment> findAppointmentsForEmployee(Employee employee_id);

}
