package com.babysit.app.contracts;


import com.babysit.app.utils.ServiceState;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Duration;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class ServiceRequestCreateDto {

    private Long id;
    private double fare;
    private LocalDateTime date;
    private Duration hour;
    private ServiceState state;
    private String indication;
    private Long userId;
    private Long babysitId;
    private Long pagoId;

}
