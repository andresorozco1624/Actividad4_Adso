package com.babysit.app.contracts;

import com.babysit.app.utils.ServiceState;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor

public class ServiceRequestUpdateInProgressDto {
    private ServiceState state;
    private Long pagoId;
}
