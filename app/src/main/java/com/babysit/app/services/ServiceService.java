package com.babysit.app.services;


import com.babysit.app.contracts.*;
import com.babysit.app.entities.PaymentEntity;
import com.babysit.app.entities.ServiceEntity;
import com.babysit.app.entities.UserEntity;
import com.babysit.app.repositories.PaymentRepository;
import com.babysit.app.repositories.ServiceRepository;
import com.babysit.app.repositories.UserRepository;
import com.babysit.app.utils.PaymentState;
import com.babysit.app.utils.ServiceState;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class ServiceService {


    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private  UserRepository userRepository;

    public String createService (ServiceRequestCreateDto serviceDto){

        ServiceEntity serviceEntity = new ServiceEntity();
        serviceEntity.setFare(serviceDto.getFare());
        serviceEntity.setDate(serviceDto.getDate());
        serviceEntity.setHour(serviceDto.getHour());
        serviceEntity.setState(ServiceState.REQUESTED);
        serviceEntity.setNoChildren(serviceDto.getNoChildren());
        serviceEntity.setUser(userRepository.getReferenceById(serviceDto.getUserId()));
        serviceEntity.setBabysit(userRepository.getReferenceById(serviceDto.getBabysitId()));
        serviceEntity.setIndication(serviceDto.getIndication());
        this.serviceRepository.save(serviceEntity);

        return "Creado";
    }

    public String updateServiceReserved (ServiceRequestUpdateReservedDto serviceRequest,Long serviceId){
        ServiceEntity serviceEntity = this.serviceRepository.getReferenceById(serviceId);

        serviceEntity.setState(serviceRequest.getState());

        if (serviceEntity.getBabysit() == null){
            serviceEntity.setBabysit(this.userRepository.getReferenceById(serviceRequest.getBabysitId()));
        }

        serviceRepository.save(serviceEntity);

        return "Actualizado";
    }

    public String updateServiceInProgress (ServiceRequestUpdateInProgressDto serviceRequest, Long serviceId){

        ServiceEntity serviceEntity = this.serviceRepository.getReferenceById(serviceId);
        createPayment(serviceEntity);
        serviceEntity.setState(serviceRequest.getState());
        serviceEntity.setPagoId(this.paymentRepository.getReferenceById(serviceId + 1000));

        this.serviceRepository.save(serviceEntity);
        return "Actualizado";
    }
    public String changeFlagState(Long serviceId, Long userId) {
        ServiceEntity serviceEntity = this.serviceRepository.findById(serviceId).get();
        UserEntity userEntity = this.userRepository.findById(userId).get();

        if (Objects.equals(userEntity.getRol().getTitle(), "CLIENT")){
            serviceEntity.setFlagClient(Boolean.TRUE);
            if (serviceEntity.getFlagBabysit() == Boolean.TRUE && serviceEntity.getState() == ServiceState.RESERVED){
                serviceEntity.setState(ServiceState.IN_PROGRESS);
                createPayment(serviceEntity);
                serviceEntity.setPagoId(this.paymentRepository.getReferenceById(serviceId + 1000));
                serviceEntity.setFlagClient(Boolean.FALSE);
                serviceEntity.setFlagBabysit(Boolean.FALSE);
            }

        }
        else {
            serviceEntity.setFlagBabysit(Boolean.TRUE);
            if(serviceEntity.getFlagClient() == Boolean.TRUE && serviceEntity.getState() == ServiceState.RESERVED){
                serviceEntity.setState(ServiceState.IN_PROGRESS);
                createPayment(serviceEntity);
                serviceEntity.setPagoId(this.paymentRepository.getReferenceById(serviceId + 1000));
                serviceEntity.setFlagClient(Boolean.FALSE);
                serviceEntity.setFlagBabysit(Boolean.FALSE);
            }
            if(serviceEntity.getFlagClient() == Boolean.TRUE && serviceEntity.getState() == ServiceState.IN_PROGRESS){
                serviceEntity.setState(ServiceState.COMPLETED);
                serviceEntity.setFlagClient(Boolean.FALSE);
                serviceEntity.setFlagBabysit(Boolean.FALSE);
            }
        }
        this.serviceRepository.save(serviceEntity);

        return "Actualizado";
    }

    public String createPayment (ServiceEntity serviceEntity){

        PaymentEntity paymentEntity = new PaymentEntity();

        paymentEntity.setState(PaymentState.PENDING);
        paymentEntity.setFare(serviceEntity.getFare());
        paymentEntity.setId(serviceEntity.getId()+1000);

        this.paymentRepository.save(paymentEntity);
        return "Creado";
    }


    public List<ServiceResponseDetailDto> getServiceByState(String state){

        ServiceState serviceState=ServiceState.valueOf(state);
        return becomeToDto(this.serviceRepository.findByState(serviceState)) ;

    }

    public List<ServiceResponseDetailDto> getServicesByUserAndState (Long userId,String state){
        ServiceState serviceState = ServiceState.valueOf(state);
        UserEntity userEntity = this.userRepository.findById(userId).get();

        if (userEntity.getRol().getTitle().equals("CLIENT")){
            return becomeToDto(this.serviceRepository.findByUserAndState(userEntity,serviceState));
        }
        else {
            return becomeToDto(this.serviceRepository.findByBabysitAndState(userEntity,serviceState));
        }

    }

    public List<ServiceResponseDetailDto> findAllServices() {
        List<ServiceEntity> serviceEntities = this.serviceRepository.findAll();

        return becomeToDto(serviceEntities);
    }

    public List<ServiceResponseDetailDto> becomeToDto(List<ServiceEntity> serviceEntities) {
        List<ServiceResponseDetailDto> serviceResponseDetailDtos = new ArrayList<>();

        for(int i=0; i<serviceEntities.size();i++){
            ServiceEntity serviceEntity = serviceEntities.get(i);
            ServiceResponseDetailDto serviceResponse = new ServiceResponseDetailDto();
            serviceResponse.setDate(serviceEntity.getDate());
            serviceResponse.setIndication(serviceEntity.getIndication());
            serviceResponse.setHour(serviceEntity.getHour());
            serviceResponse.setFare(serviceEntity.getFare());
            serviceResponse.setId(serviceEntity.getId());
            serviceResponse.setState(serviceEntity.getState());
            serviceResponse.setFlagClient(serviceEntity.getFlagClient());
            serviceResponse.setFlagBabysit(serviceEntity.getFlagBabysit());
            if(serviceEntity.getBabysit()!= null){
                serviceResponse.setBabysitName(serviceEntity.getBabysit().getFirstName());
            }
            serviceResponse.setClientName(serviceEntity.getUser().getFirstName());

                serviceResponse.setNoChildren(serviceEntity.getNoChildren());


            serviceResponseDetailDtos.add(serviceResponse);

        }
        return serviceResponseDetailDtos;
    }

    public List<ServiceResponseDetailDto> getServicesByUser(Long userId) {

        UserEntity userEntity = this.userRepository.getReferenceById(userId);
        List<ServiceEntity> services = this.serviceRepository.findByUser(userEntity);
        return becomeToDto(services);
    }


    public String updateServiceCanceled(Long serviceId) {
        ServiceEntity serviceEntity = this.serviceRepository.findById(serviceId).get();
        serviceEntity.setState(ServiceState.CANCELED);
        this.serviceRepository.save(serviceEntity);
        return "Servicio Cancelado";
    }

    public String paymentCanceled(Long serviceId) {
        ServiceEntity serviceEntity = this.serviceRepository.findById(serviceId).get();
        PaymentEntity paymentEntity = this.paymentRepository.findById(serviceId + 1000L).get();
        paymentEntity.setFile(null);
        paymentEntity.setDate(null);
        serviceEntity.setFlagClient(Boolean.FALSE);
        this.serviceRepository.save(serviceEntity);
        return  "Pago Rechazado";
    }
}
