package com.babysit.app.contracts;

import com.babysit.app.entities.AddressEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class UserResponseDetailDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String phone;
    private String email;
    private String description;
    private String age;
    private Long fare;
    private AddressResponseDetailDto address;
    private RolResponseDetailDto rol;
}
