package com.babysit.app.contracts;

import com.babysit.app.utils.PaymentState;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaymentRequestUpdateEnd {


    private PaymentState state;

}
