package com.babysit.app.services;


import com.babysit.app.contracts.UserDto;
import com.babysit.app.entities.UserEntity;
import com.babysit.app.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public List<UserDto> getAllUsers(){
        List<UserEntity> entities = repository.findAll();
        List<UserDto> dtos= new ArrayList<>();

        for (int i=0;i < entities.size();i++){
            UserEntity entity = entities.get(i);
            UserDto dto = new UserDto();

            dto.setId(entity.getId());
            dto.setName(entity.getName());
            dto.setLastName(entity.getLastName());
            dto.setAddress(entity.getAddress());
            dto.setEmail(entity.getEmail());
            dto.setPassword(entity.getPassword());
            dto.setPhone(entity.getPhone());
            dto.setDescription(entity.getDescription());
            dto.setCity(entity.getCity());
            dto.setCountry(entity.getCountry());
            dto.setDepartment(entity.getDepartment());

            dtos.add(dto);

        }

        return dtos;
    }

    public UserDto getUserById(Long id){

        UserEntity entity = this.repository.getReferenceById(id);
        UserDto dto= new UserDto();

        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setLastName(entity.getLastName());
        dto.setAddress(entity.getAddress());
        dto.setEmail(entity.getEmail());
        dto.setPassword(entity.getPassword());
        dto.setPhone(entity.getPhone());
        dto.setDescription(entity.getDescription());
        dto.setCity(entity.getCity());
        dto.setCountry(entity.getCountry());
        dto.setDepartment(entity.getDepartment());


        return dto;
    }
    
    public String createUser (UserDto dto){
        
        List<UserEntity> entities = repository.findAll();
        UserEntity entity = new UserEntity();

        entity.setName(dto.getName());
        entity.setLastName(dto.getLastName());
        entity.setAddress(dto.getAddress());
        entity.setEmail(dto.getEmail());
        entity.setPassword(dto.getPassword());
        entity.setPhone(dto.getPhone());
        entity.setDescription(dto.getDescription());
        entity.setCity(dto.getCity());
        entity.setCountry(dto.getCountry());
        entity.setDepartment(dto.getDepartment());

        this.repository.save(entity);
        
        
        
        
        return "El usuario ha sido creado de manera exitosa";
    }

    public String EditUserById (UserDto dto, Long id){

        UserEntity entity = this.repository.getReferenceById(id);

        entity.setName(dto.getName());
        entity.setLastName(dto.getLastName());
        entity.setAddress(dto.getAddress());
        entity.setEmail(dto.getEmail());
        entity.setPassword(dto.getPassword());
        entity.setPhone(dto.getPhone());
        entity.setDescription(dto.getDescription());
        entity.setCity(dto.getCity());
        entity.setCountry(dto.getCountry());
        entity.setDepartment(dto.getDepartment());

        this.repository.save(entity);
        return "El usuario ha sido actualizado";
    }


    public String deleteUserById (Long id){
        this.repository.deleteById(id);
        return "El usuario ha sido eliminado correctamente";
    }
}
