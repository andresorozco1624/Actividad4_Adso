package com.babysit.app.services;


import com.babysit.app.contracts.PaymentRequestUpdateEnd;
import com.babysit.app.contracts.PaymentRequestUpdateInProgress;
import com.babysit.app.contracts.PaymentResponseDetailDto;
import com.babysit.app.entities.PaymentEntity;
import com.babysit.app.entities.ServiceEntity;
import com.babysit.app.entities.UserEntity;
import com.babysit.app.repositories.PaymentRepository;
import com.babysit.app.repositories.ServiceRepository;
import com.babysit.app.repositories.UserRepository;
import com.babysit.app.utils.PaymentState;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service


public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private UserRepository userRepository;


    public String updatePaymentInProgress(PaymentRequestUpdateInProgress paymentRequest, Long paymentId) {
        PaymentEntity paymentEntity= this.paymentRepository.getReferenceById(paymentId);
        paymentEntity.setDate(paymentRequest.getDate());
        paymentEntity.setState(paymentRequest.getState());
        paymentEntity.setType(paymentRequest.getType());
        paymentEntity.setFile(paymentRequest.getFile());

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
            paymentResponse.setService(paymentEntity.getServiceEntity().getId());

            paymentResponseFilterStateDtos.add(paymentResponse);

        }

        return paymentResponseFilterStateDtos;
    }

    public List<PaymentResponseDetailDto> findAllPayments() {
        List<PaymentEntity> paymentEntities = this.paymentRepository.findAll();
        return becomeToDto(paymentEntities);
    }

    public List<PaymentResponseDetailDto> findUserPayment(Long userId) {

        UserEntity userEntity = userRepository.getReferenceById(userId);
        List<ServiceEntity> serviceEntities = this.serviceRepository.findByUser(userEntity);
        List<PaymentEntity> paymentEntities = new ArrayList<>();
        for (int i=0; i<serviceEntities.size();i++){

            if (serviceEntities.get(i).getPagoId()!= null) {
                PaymentEntity paymentEntity = serviceEntities.get(i).getPagoId();
                paymentEntities.add(paymentEntity);
            }
        }
        return becomeToDto(paymentEntities);
    }

    public List<PaymentResponseDetailDto> findByUserAndState(Long userId, String state) {

        UserEntity userEntity = this.userRepository.findById(userId).get();

        PaymentState paymentState = PaymentState.valueOf(state);

        List<ServiceEntity> serviceEntities = this.serviceRepository.findByUser(userEntity);
        List<PaymentEntity> paymentEntities = new ArrayList<>();
        for (int i=0; i < serviceEntities.size(); i++){

            if (serviceEntities.get(i).getPagoId() != null){
                PaymentEntity paymentEntity = serviceEntities.get(i).getPagoId();
                PaymentEntity paymentFiltrate = this.paymentRepository.findByIdAndState(paymentEntity.getId(), paymentState);
                if (paymentFiltrate != null){
                    paymentEntities.add(paymentFiltrate);
                }

            }


        }

        return becomeToDto(paymentEntities);
    }
}
