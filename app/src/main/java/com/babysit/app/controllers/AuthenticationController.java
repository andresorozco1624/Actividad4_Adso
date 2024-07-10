package com.babysit.app.controllers;

import com.babysit.app.contracts.AuthenticationRequestLoginDto;
import com.babysit.app.contracts.AuthenticationRequestRegisterDto;
import com.babysit.app.contracts.AuthenticationResponseDto;
import com.babysit.app.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authService;
    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponseDto> login(
            @RequestBody AuthenticationRequestLoginDto requestLoginDto
            ){
        return  ResponseEntity.ok(authService.login(requestLoginDto));
    }

    @PostMapping("/register")
    public  ResponseEntity<AuthenticationResponseDto> register (
            @RequestBody AuthenticationRequestRegisterDto requestRegisterDto
            ){
        return  ResponseEntity.ok(authService.register(requestRegisterDto));
    }
}
