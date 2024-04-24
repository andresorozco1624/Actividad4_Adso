package com.babysit.app.services;


import com.babysit.app.contracts.RolDto;
import com.babysit.app.entities.RolEntity;
import com.babysit.app.repositories.RolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service

public class RolService {

    @Autowired
    private RolRepository rolRepository;

    public List<RolDto> getAllRols (){

         List <RolEntity> rolEntities = rolRepository.findAll();
         List <RolDto> rolDtos = new ArrayList<>();

         for (RolEntity r : rolEntities){
             RolDto rolDto = RolDto.builder()
                     .id(r.getId())
                     .title(r.getTitle())
                     .build();
             rolDtos.add(rolDto);
         }
        return rolDtos;
    }

}
