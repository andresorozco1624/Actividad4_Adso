package com.babysit.app.controllers;

import com.babysit.app.contracts.AddressResponseDetailDto;
import com.babysit.app.services.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")

@RestController

@RequestMapping("/address")
public class AddressController {

    @Autowired
    private AddressService addressService;

    @GetMapping("/country/{country}")
    public List<AddressResponseDetailDto> findByCountry (@PathVariable("country") String country){
        return addressService.getAddressByCountry(country);
    }

    @GetMapping("/state/{state}")
    public List<AddressResponseDetailDto> findByState (@PathVariable("state") String state){
        return addressService.getAddressByState(state);
    }

    @GetMapping("/city/{city}")
    public List<AddressResponseDetailDto> findByCity (@PathVariable("city") String city){
        return addressService.getAddressByCity(city);
    }


    @GetMapping("")
    public List<AddressResponseDetailDto> findAllAddress (){
        return addressService.getAllAddress();
    }
}
