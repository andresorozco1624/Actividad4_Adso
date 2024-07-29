package com.babysit.app.services;


import com.babysit.app.contracts.*;
import com.babysit.app.entities.AddressEntity;
import com.babysit.app.entities.RolEntity;
import com.babysit.app.entities.UserEntity;
import com.babysit.app.repositories.AddressRepository;
import com.babysit.app.repositories.IdentificationRepository;
import com.babysit.app.repositories.RolRepository;
import com.babysit.app.repositories.UserRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private RolRepository rolRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private IdentificationRepository identificationRepository;



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
        userDto.setId(userEntity.getId());
        userDto.setFirstName(userEntity.getFirstName());
        userDto.setLastName(userEntity.getLastName());
        userDto.setAddress(AddressResponseDetailDto.builder()
                        .id(userEntity.getAddress().getId())
                        .city(userEntity.getAddress().getCity())
                        .state(userEntity.getAddress().getState())
                        .country(userEntity.getAddress().getCountry())
                .build());
        userDto.setEmail(userEntity.getEmail());
        userDto.setPhone(userEntity.getPhone());
        userDto.setDescription(userEntity.getDescription());
        userDto.setRol(RolResponseDetailDto.builder()
                        .id(userEntity.getRol().getId())
                        .title(userEntity.getRol().getTitle())
                .build());
        userDto.setAge(userEntity.getAge());
        userDto.setFare(userEntity.getFare());



        return userDto;

    }

    public UserEntity becomeToEntityCreate (UserRequestCreateDto dto){
        UserEntity entity = new UserEntity();
        entity.setFirstName(dto.getFirstName());
        entity.setNoIdentification(dto.getNoIdentification());
        entity.setIdentification(this.identificationRepository.findById(dto.getIdentification()).get());
        entity.setLastName(dto.getLastName());
        entity.setEmail(dto.getEmail());
        entity.setPassword(dto.getPassword());
        entity.setUbication(dto.getUbication());
        entity.setPhone(dto.getPhone());
        AddressEntity addressEntity = this.addressRepository.findById(dto.getAddress()).get();
        entity.setAddress(addressEntity);
        entity.setRol(this.rolRepository.findById(dto.getRol()).get());
        entity.setAge(dto.getAge());
        entity.setFare(dto.getFare());
        entity.setDescription(dto.getDescription());
        return entity;

    }

    public UserEntity becomeToEntityEdit (UserRequestEditDto dto, UserEntity entity){

        entity.setAddress(dto.getAddress());
        entity.setPassword(dto.getPassword());
        entity.setPhone(dto.getPhone());
        entity.setDescription(dto.getDescription());

        return entity;

    }

    public List<UserResponseDetailDto> findFavoritesBabysit(Long userId) {
       UserEntity userEntity = this.repository.getReferenceById(userId);
       List<UserResponseDetailDto> userResponse = new ArrayList<>();
       List<UserEntity> favoritesbabysits = userEntity.getFavoriteBabysits();

       for (int i=0; i<favoritesbabysits.size();i++){
           userResponse.add(becomeToDto(favoritesbabysits.get(i)));
       }
       return userResponse;
    }

    public UserResponseDetailDto getCurrentUser(Authentication authentication) {
        return becomeAuthenticationToDto((UserEntity) authentication.getPrincipal());
    }

    private UserResponseDetailDto becomeAuthenticationToDto(UserEntity userEntity) {
        return becomeToDto(userEntity);
    }

    public List<UserResponseDetailDto> getAllBabysits(Long rolId) {
        RolEntity rolEntity  = this.rolRepository.findById(rolId).get();

        List<UserEntity> entities = this.repository.findByRol(rolEntity);
        List<UserResponseDetailDto> dtos= new ArrayList<>();
        for (int i=0;i < entities.size();i++){
            UserEntity entity = entities.get(i);
            dtos.add(becomeToDto(entity));
        }
        return dtos;
    }
}
