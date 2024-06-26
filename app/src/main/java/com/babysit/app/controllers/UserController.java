package com.babysit.app.controllers;

import com.babysit.app.contracts.UserRequestCreateDto;
import com.babysit.app.contracts.UserRequestEditDto;
import com.babysit.app.contracts.UserResponseDetailDto;
import com.babysit.app.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/user")

public class UserController {

    @Autowired
    private UserService service;

    @GetMapping()
    public List <UserResponseDetailDto> getAllUser(){
        return this.service.getAllUsers();
    }

    @GetMapping("/{id}")
    public UserResponseDetailDto getUserById(@PathVariable("id") Long id){
        return this.service.getUserById(id);
    }

    @PostMapping()
    public String createUser(@RequestBody UserRequestCreateDto dto){
        return this.service.createUser(dto);
    }


    @PutMapping("/{id}")
    public String editUserById(@PathVariable("id") Long id, @RequestBody UserRequestEditDto dto){
        return this.service.EditUserById(dto,id);
    }

    @DeleteMapping("/{id}")
    public String deleteUserByid(@PathVariable("id") Long id){
        return this.service.deleteUserById(id);
    }

    @PutMapping("/{userId}/favorites/{babysitId}")
    public String addFavoriteBabysit (@PathVariable("userId") Long userId,@PathVariable("babysitId") Long babysitId ){
        return this.service.addFavoriteBabysit(userId,babysitId);
    }
}
