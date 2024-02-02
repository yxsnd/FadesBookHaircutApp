package com.ykd.fades.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.Optional;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_appointment")
public class Appointment {

    @Id
    @GeneratedValue
    private Integer id;
//    @ManyToOne
//    @JoinColumn(name = "employee_id", referencedColumnName = "id")
    private Integer employeeId;
    private Date date;
    private String timeSlotsBooked;
    private String memo;

}
