package com.babysit.app.contracts;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class UserDto {
    private Long id;
    private String name;
    private String LastName;
    private String phone;
    private String email;
    private String country;
    private String city;
    private String department;
    private String description;
    private String address;
}
