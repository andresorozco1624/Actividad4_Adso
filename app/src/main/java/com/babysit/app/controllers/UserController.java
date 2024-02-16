package com.babysit.app.controllers;

import com.babysit.app.contracts.UserDto;
import com.babysit.app.services.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/user")

public class UserController {

    @Autowired
    private UserService service;

    @GetMapping()
    public List <UserDto> getAllUser(){
        return this.service.getAllUsers();
    }

    @GetMapping("/{id}")
    public UserDto getUserById( @PathVariable("id") Long id){
        return this.service.getUserById(id);
    }

    @PostMapping()
    public String createUser(@RequestBody UserDto dto){
        return this.service.createUser(dto);
    }


    @PutMapping("/{id}")
    public String editUserById(@PathVariable("id") Long id, @RequestBody UserDto dto){
        return this.service.EditUserById(dto,id);
    }

    @DeleteMapping("/{id}")
    public String deleteUserByid(@PathVariable("id") Long id){
        return this.service.deleteUserById(id);
    }
}
