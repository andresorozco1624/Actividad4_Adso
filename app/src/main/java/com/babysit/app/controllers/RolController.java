package com.babysit.app.controllers;

import com.babysit.app.services.RolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rol")

public class RolController {

    @Autowired
    private RolService rolService;


}
