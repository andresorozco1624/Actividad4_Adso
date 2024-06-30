package com.babysit.app.contracts;


import com.babysit.app.entities.AddressEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserRequestEditDto {
    private String phone;
    private String description;
    private AddressEntity address;
    private String password;
}
