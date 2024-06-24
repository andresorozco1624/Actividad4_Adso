package com.babysit.app.services;


import com.babysit.app.contracts.ServiceRequestCreateDto;
import com.babysit.app.contracts.ServiceRequestUpdateReservedDto;
import com.babysit.app.entities.ServiceEntity;
import com.babysit.app.repositories.ServiceRepository;
import com.babysit.app.repositories.UserRepository;
import com.babysit.app.utils.ServiceState;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceService {

    @Autowired
    private ServiceRepository serviceRepository;


    @Autowired
    private  UserRepository userRepository;

    public String createService (ServiceRequestCreateDto serviceDto){

        ServiceEntity serviceEntity = new ServiceEntity();
        serviceEntity.setFare(serviceDto.getFare());
        serviceEntity.setDate(serviceDto.getDate());
        serviceEntity.setHour(serviceDto.getHour());
        serviceEntity.setState(ServiceState.REQUESTED);
        serviceEntity.setUser(userRepository.getReferenceById(serviceDto.getUserId()));
        serviceEntity.setIndication(serviceDto.getIndication());
        this.serviceRepository.save(serviceEntity);

        return "Creado";
    }

    public String updateServiceReserved (ServiceRequestUpdateReservedDto serviceRequest,Long serviceId){
        ServiceEntity serviceEntity = this.serviceRepository.getReferenceById(serviceId);

        serviceEntity.setState(serviceRequest.getState());
        serviceEntity.setBabysit(this.userRepository.getReferenceById(serviceRequest.getBabysitId()));
        serviceRepository.save(serviceEntity);

        return "Actualizado";
    }
}
