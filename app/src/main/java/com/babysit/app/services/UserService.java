package com.babysit.app.services;


import com.babysit.app.contracts.*;
import com.babysit.app.entities.UserEntity;
import com.babysit.app.repositories.RolRepository;
import com.babysit.app.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    private RolRepository rolRepository;

    public List<UserResponseDetailDto> getAllUsers(){
        List<UserEntity> entities = this.repository.findAll();
        List<UserResponseDetailDto> dtos= new ArrayList<>();

        for (int i=0;i < entities.size();i++){
            UserEntity entity = entities.get(i);
            dtos.add(becomeToDto(entity));
        }
        return dtos;
    }

    public UserResponseDetailDto getUserById(Long id){
        UserEntity entity = this.repository.getReferenceById(id);
        return becomeToDto(entity);
    }
    
    public String createUser (UserRequestCreateDto dto){
        UserEntity entity = new UserEntity();
        this.repository.save(becomeToEntityCreate(dto));
        return "El usuario ha sido creado de manera exitosa";
    }

    public String EditUserById (UserRequestEditDto dto, Long id){

        UserEntity entity = this.repository.getReferenceById(id);
        this.repository.save(becomeToEntityEdit(dto,entity));
        return "El usuario ha sido actualizado";
    }


    public String deleteUserById (Long id){
        this.repository.deleteById(id);
        return "El usuario ha sido eliminado correctamente";
    }

    public String addFavoriteBabysit(Long userId, Long babysitId) {

        UserEntity client = this.repository.getReferenceById(userId);
        UserEntity babysit = this.repository.getReferenceById(babysitId);

        client.getFavoriteBabysits().add(babysit);
        this.repository.save(client);

        return "Agregado";
    }

    public UserResponseDetailDto becomeToDto (UserEntity userEntity){

        UserResponseDetailDto userDto = new UserResponseDetailDto();
        userDto.setFirstName(userEntity.getFirstName());
        userDto.setLastName(userEntity.getLastName());
        userDto.setAddress(AddressResponseDetailDto.builder()
                        .city(userEntity.getAddress().getCity())
                        .state(userEntity.getAddress().getState())
                        .country(userEntity.getAddress().getCountry())
                .build());
        userDto.setEmail(userEntity.getEmail());
        userDto.setPassword(userEntity.getPassword());
        userDto.setPhone(userEntity.getPhone());
        userDto.setDescription(userEntity.getDescription());
        userDto.setRol(RolResponseDetailDto.builder()
                        .id(userEntity.getRol().getId())
                        .title(userEntity.getRol().getTitle())
                .build());


        return userDto;

    }

    public UserEntity becomeToEntityCreate (UserRequestCreateDto dto){
        UserEntity entity = new UserEntity();
        entity.setFirstName(dto.getFirstName());
        entity.setLastName(dto.getLastName());
        entity.setAddress(dto.getAddress());
        entity.setEmail(dto.getEmail());
        entity.setPassword(dto.getPassword());
        entity.setPhone(dto.getPhone());
        entity.setDescription(dto.getDescription());
        entity.setRol(this.rolRepository.getReferenceById(dto.getId()));
        return entity;

    }

    public UserEntity becomeToEntityEdit (UserRequestEditDto dto, UserEntity entity){

        entity.setAddress(dto.getAddress());
        entity.setPassword(dto.getPassword());
        entity.setPhone(dto.getPhone());
        entity.setDescription(dto.getDescription());

        return entity;

    }
}
