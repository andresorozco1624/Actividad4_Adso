package com.babysit.app.controllers;

import com.babysit.app.contracts.ServiceRequestCreateDto;
import com.babysit.app.contracts.ServiceRequestUpdateInProgressDto;
import com.babysit.app.contracts.ServiceRequestUpdateReservedDto;
import com.babysit.app.contracts.ServiceResponseDetailDto;
import com.babysit.app.entities.ServiceEntity;
import com.babysit.app.repositories.ServiceRepository;
import com.babysit.app.services.PaymentService;
import com.babysit.app.services.ServiceService;
import com.babysit.app.utils.ServiceState;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController()

@RequestMapping("/service")
public class ServiceController {


    @Autowired
    private ServiceService serviceService;

    @Autowired
    private ServiceRepository serviceRepository;


    @Autowired
    private PaymentService paymentService;

    @PostMapping()
    public String createService (@RequestBody ServiceRequestCreateDto serviceDto){

        return serviceService.createService(serviceDto);
    }

    @PutMapping("/reserved/{serviceId}")
    public String updateServiceReserved(@RequestBody ServiceRequestUpdateReservedDto serviceRequest, @PathVariable("serviceId") Long serviceId){
        return this.serviceService.updateServiceReserved(serviceRequest, serviceId);
    }

    @PutMapping("/inprogress/{serviceId}")
    public String updateServiceInProgress(@RequestBody ServiceRequestUpdateInProgressDto serviceRequest, @PathVariable("serviceId") Long serviceId){
        return this.serviceService.updateServiceInProgress(serviceRequest,serviceId);
    }

    @GetMapping("/state/{state}")
    public List<ServiceResponseDetailDto> getServiceByState(@PathVariable("state") String state){

        return this.serviceService.getServiceByState(state);
    }

    @GetMapping("/all")
    public  List<ServiceResponseDetailDto> findAllServices(){
        return this.serviceService.findAllServices();
    }

}
