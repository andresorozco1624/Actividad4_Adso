package com.babysit.app.contracts;

import com.babysit.app.utils.PaymentState;

import java.rmi.registry.LocateRegistry;
import java.time.LocalDateTime;

public class PaymentDto {
    private Long id;
    private LocalDateTime date;
    private double fare;

    private PaymentState state;


}
