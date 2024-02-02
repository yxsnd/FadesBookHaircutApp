package com.ykd.fades.controller.book;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.ykd.fades.model.Employee;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
public class BookAppointmentRequest {

    private Integer employeeId;
    private Date date;
    private String timeSlotsBooked;
    private String memo;

    @JsonCreator
    public BookAppointmentRequest(@JsonProperty("employee") Integer employeeId, @JsonProperty("date") Date date, @JsonProperty("timeSlotBooked") String timeSlotsBooked, @JsonProperty("memo") String memo) {
        this.employeeId = employeeId;
        this.date = date;
        this.timeSlotsBooked = timeSlotsBooked;
        this.memo = memo;
    }

}
