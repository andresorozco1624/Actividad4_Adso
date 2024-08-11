package com.babysit.app.controllers;

import com.babysit.app.contracts.PaymentRequestUpdateEnd;
import com.babysit.app.contracts.PaymentRequestUpdateInProgress;
import com.babysit.app.contracts.PaymentResponseDetailDto;
import com.babysit.app.services.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PutMapping("/state/inprogress/{paymentId}")
    public String updatePaymentInProgress (@RequestBody PaymentRequestUpdateInProgress paymentRequest, @PathVariable("paymentId") Long paymentId){
        return this.paymentService.updatePaymentInProgress( paymentRequest,paymentId);
    }

    @PutMapping("/state/end/{paymentId}")
    public String updatePaymentEnd (@RequestBody PaymentRequestUpdateEnd paymentRequest, @PathVariable("paymentId") Long paymentId){
        return this.paymentService.updatePaymentEnd(paymentRequest,paymentId);
    }


    @GetMapping("/findByState/{state}")
    public List<PaymentResponseDetailDto> findPaymentByState(@PathVariable("state") String state){
        return this.paymentService.findByState(state);
    }

    @GetMapping("/all")
    public List<PaymentResponseDetailDto> findAllPayments(){
        return this.paymentService.findAllPayments();
    }

    @GetMapping("/{userId}")
    public List<PaymentResponseDetailDto> findUserPayment(@PathVariable("userId") Long userId){
        return this.paymentService.findUserPayment(userId);
    }

    @GetMapping("/{userId}/state/{state}")
    public List<PaymentResponseDetailDto> findByUserAndState(@PathVariable("userId") Long userId , @PathVariable("state") String state) {
        return this.paymentService.findByUserAndState(userId,state);
    }



}
