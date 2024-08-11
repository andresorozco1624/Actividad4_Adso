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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
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

    @PutMapping("/change/{serviceId}/{userId}")
    public String changeFlagState(@PathVariable("userId") Long userId, @PathVariable("serviceId") Long serviceId){
        return this.serviceService.changeFlagState(serviceId,userId);
    }

    @GetMapping("/state/{state}")
    public List<ServiceResponseDetailDto> getServiceByState(@PathVariable("state") String state){
        return this.serviceService.getServiceByState(state);
    }

    @GetMapping("/{userId}/state/{state}")
    public List<ServiceResponseDetailDto> getServiceByUserAndState (@PathVariable("userId")Long userId,@PathVariable("state") String state){
        return this.serviceService.getServicesByUserAndState(userId,state);
    }

    @GetMapping("/{userId}")
    public List<ServiceResponseDetailDto> getServicesByUser (@PathVariable("userId")Long userId){
        return this.serviceService.getServicesByUser(userId);
    }


    @GetMapping("/all")
    public  List<ServiceResponseDetailDto> findAllServices(){
        return this.serviceService.findAllServices();
    }


    @PostMapping("/saveFile")
    public ResponseEntity saveFile (@RequestParam("file")MultipartFile file) throws IOException {
        String fileName = Math.random()*10000 + "-" + file.getOriginalFilename();
        //try {
            String basePathToUpload = "C:/xampp/htdocs/payments/";
            String newPath =  basePathToUpload + fileName;
            System.out.println("Aquiii >> " + newPath);
            file.transferTo( new File(newPath));
        /*} catch (Exception e) {x
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }*/
        return ResponseEntity.ok(fileName);
    }
}
