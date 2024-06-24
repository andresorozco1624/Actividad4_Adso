package com.babysit.app.controllers;

import com.babysit.app.contracts.ServiceRequestCreateDto;
import com.babysit.app.contracts.ServiceRequestUpdateReservedDto;
import com.babysit.app.services.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController()

@RequestMapping("/service")
public class ServiceController {


    @Autowired
    private ServiceService serviceService;

    @PostMapping()
    public String createService (@RequestBody ServiceRequestCreateDto serviceDto){

        return serviceService.createService(serviceDto);
    }

    @PutMapping("/{serviceId}")
    public String updateServiceReserved(@RequestBody ServiceRequestUpdateReservedDto serviceRequest, @PathVariable("serviceId") Long serviceId){
        return this.serviceService.updateServiceReserved(serviceRequest, serviceId);
    }

}
