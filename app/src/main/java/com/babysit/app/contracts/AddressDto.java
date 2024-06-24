package com.babysit.app.contracts;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class AddressDto {

    private Long id;
    private String country;
    private String state;
    private String city;
}
