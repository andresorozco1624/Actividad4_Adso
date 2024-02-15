package com.babysit.app.services;


import com.babysit.app.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UseService {

    @Autowired
    private UserRepository repository;
}
