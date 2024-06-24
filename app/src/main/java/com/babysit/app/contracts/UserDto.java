package com.babysit.app.contracts;

import com.babysit.app.entities.RolEntity;
import com.babysit.app.entities.AddressEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class UserDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String phone;
    private String email;

    private String description;
    private AddressEntity address;
    private String password;
    private RolEntity rol;
}
