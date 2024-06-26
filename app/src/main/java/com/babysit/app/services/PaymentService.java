package com.babysit.app.services;


import com.babysit.app.contracts.PaymentRequestUpdateEnd;
import com.babysit.app.contracts.PaymentRequestUpdateInProgress;
import com.babysit.app.contracts.PaymentResponseDetailDto;
import com.babysit.app.entities.PaymentEntity;
import com.babysit.app.repositories.PaymentRepository;
import com.babysit.app.utils.PaymentState;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service


public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;


    public String updatePaymentInProgress(PaymentRequestUpdateInProgress paymentRequest, Long paymentId) {
        PaymentEntity paymentEntity= this.paymentRepository.getReferenceById(paymentId);
        paymentEntity.setDate(paymentRequest.getDate());
        paymentEntity.setState(paymentRequest.getState());
        paymentEntity.setType(paymentRequest.getType());

        this.paymentRepository.save(paymentEntity);
        return "Actualizado";
    }

    public String updatePaymentEnd(PaymentRequestUpdateEnd paymentRequest, Long paymentId) {
        PaymentEntity paymentEntity= this.paymentRepository.getReferenceById(paymentId);
        paymentEntity.setState(paymentRequest.getState());
        this.paymentRepository.save(paymentEntity);
        return "Actualizado";
    }

    public List<PaymentResponseDetailDto> findByState(String state) {
        PaymentState paymentState = PaymentState.valueOf(state);
        List<PaymentEntity> paymentEntities = this.paymentRepository.findByState(paymentState);
        return becomeToDto(paymentEntities);
    }

    public List<PaymentResponseDetailDto> becomeToDto (List<PaymentEntity> paymentEntities){
        List <PaymentResponseDetailDto> paymentResponseFilterStateDtos = new ArrayList<>();

        for (int i=0; i < paymentEntities.size(); i++){
            PaymentEntity paymentEntity = paymentEntities.get(i);
            PaymentResponseDetailDto paymentResponse = new PaymentResponseDetailDto();

            paymentResponse.setDate(paymentEntity.getDate());
            paymentResponse.setType(paymentEntity.getType());
            paymentResponse.setState(paymentEntity.getState());
            paymentResponse.setFare(paymentEntity.getFare());
            paymentResponse.setId(paymentEntity.getId());

            paymentResponseFilterStateDtos.add(paymentResponse);

        }

        return paymentResponseFilterStateDtos;
    }

    public List<PaymentResponseDetailDto> findAllPayments() {
        List<PaymentEntity> paymentEntities = this.paymentRepository.findAll();
        return becomeToDto(paymentEntities);
    }
}
