package com.babysit.app.controllers;

import com.babysit.app.contracts.UserRequestCreateDto;
import com.babysit.app.contracts.UserRequestEditDto;
import com.babysit.app.contracts.UserResponseDetailDto;
import com.babysit.app.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
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

    @GetMapping("/babysits")
    public  List <UserResponseDetailDto> getAllBabysits(){
        Long rolId = 2L;
        return this.service.getAllBabysits(rolId);
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

    @GetMapping("/{userId}/favorites")
    public List <UserResponseDetailDto> getFavoritesBabysits(@PathVariable("userId") Long userId){
        return this.service.findFavoritesBabysit(userId);
    }


    @GetMapping("/currentUser")
    public UserResponseDetailDto getCurrentUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserResponseDetailDto userResponse = this.service.getCurrentUser(authentication);
        return userResponse;
    }

    @PostMapping("/savePhoto")
    public ResponseEntity savePhoto (@RequestParam("photo") MultipartFile file) throws IOException {
        String fileName = Math.random()*10000 + "-" + file.getOriginalFilename();
        //try {
        String basePathToUpload = "C:/xampp/htdocs/profilePhoto/";
        String newPath =  basePathToUpload + fileName;
        System.out.println("Aquiii >> " + newPath);
        file.transferTo( new File(newPath));
        /*} catch (Exception e) {x
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }*/
        return ResponseEntity.ok(fileName);
    }

}
