package com.babysit.app.services;

import com.babysit.app.contracts.AuthenticationRequestLoginDto;
import com.babysit.app.contracts.AuthenticationRequestRegisterDto;
import com.babysit.app.contracts.AuthenticationResponseDto;
import com.babysit.app.entities.AddressEntity;
import com.babysit.app.entities.IdentificationEntity;
import com.babysit.app.entities.RolEntity;
import com.babysit.app.entities.UserEntity;
import com.babysit.app.repositories.AddressRepository;
import com.babysit.app.repositories.IdentificationRepository;
import com.babysit.app.repositories.RolRepository;
import com.babysit.app.repositories.UserRepository;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
@Data
@AllArgsConstructor

public class AuthenticationService {

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private IdentificationRepository identificationRepository;

    @Autowired
    private RolRepository rolRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtService jwtService;

    public AuthenticationResponseDto login(AuthenticationRequestLoginDto requestLoginDto) {
        return null;
    }

    public AuthenticationResponseDto register(AuthenticationRequestRegisterDto requestRegisterDto) {

        AddressEntity adrressEntity= this.addressRepository.findById(requestRegisterDto.getAddress()).get();
        IdentificationEntity identificationEntity = this.identificationRepository.findById(requestRegisterDto.getIdentification()).get();
        RolEntity rolEntity= this.rolRepository.findById(requestRegisterDto.getRol()).get();
        UserEntity userEntity= UserEntity.builder()
                .firstName(requestRegisterDto.getFirstName())
                .lastName(requestRegisterDto.getLastName())

                .identification(identificationEntity)
                .noIdentification(requestRegisterDto.getNoIdentification())
                .username(requestRegisterDto.getFirstName().substring(0,0)
                            + requestRegisterDto.getLastName().substring(0,0)
                            + requestRegisterDto.getNoIdentification())
                .email(requestRegisterDto.getEmail())
                .password(requestRegisterDto.getPassword())
                .ubication(requestRegisterDto.getUbication())
                .phone(requestRegisterDto.getPhone())
                .address(adrressEntity)
                .rol(rolEntity)
                .age(requestRegisterDto.getAge())
                .fare(requestRegisterDto.getFare())
                .description(requestRegisterDto.getDescription())
                .build();
        userRepository.save(userEntity);

        return AuthenticationResponseDto.builder()
                .jwt(jwtService.getToken(userEntity))
                .build();
    }
}
