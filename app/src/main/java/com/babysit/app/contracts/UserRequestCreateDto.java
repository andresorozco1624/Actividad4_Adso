package com.babysit.app.contracts;


import com.babysit.app.entities.AddressEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class UserRequestCreateDto {
    private String firstName;
    private String lastName;
    private String noIdentification;
    private Long identification;
    private String email;
    private String password;
    private String ubication;
    private String phone;
    private Long address;
    private Long rol;
    private String age;
    private Long fare;
    private String description;
}
