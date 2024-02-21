package com.ykd.fades.controller.appointment;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
public class AllAppointmentsRequest {

    private Integer employeeId;

    @JsonCreator
    public AllAppointmentsRequest(@JsonProperty("employeeId") Integer employeeId) {
        this.employeeId = employeeId;

    }

}
