package com.babysit.app.contracts;

import com.babysit.app.utils.PaymentState;
import com.babysit.app.utils.PaymentType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaymentRequestUpdateInProgress {

    private LocalDateTime date;
    private PaymentState state;
    private PaymentType type;
}
