package com.babysit.app.contracts;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class AddressResponseDetailDto {

    private Long id;
    private String country;
    private String state;
    private String city;
}
