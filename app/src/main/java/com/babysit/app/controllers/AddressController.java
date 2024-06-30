package com.babysit.app.controllers;

import com.babysit.app.contracts.AddressResponseDetailDto;
import com.babysit.app.services.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController

@RequestMapping("/address")
public class AddressController {

    @Autowired
    private AddressService addressService;

    @GetMapping("/state/{state}")
    public List<AddressResponseDetailDto> findByState (@PathVariable("state") String state){
        return addressService.getAddressByState(state);
    }

    @GetMapping("")
    public List<AddressResponseDetailDto> findAllAddress (){
        return addressService.getAllAddress();
    }
}
