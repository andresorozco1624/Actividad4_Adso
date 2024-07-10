package com.babysit.app.contracts;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationRequestRegisterDto {
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
