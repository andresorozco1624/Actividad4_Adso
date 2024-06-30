package com.babysit.app.services;

import com.babysit.app.contracts.AddressResponseDetailDto;
import com.babysit.app.entities.AddressEntity;
import com.babysit.app.repositories.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AddressService {

    @Autowired
    private AddressRepository addressRepository;

    public List<AddressResponseDetailDto> getAddressByState (String state){

        List<AddressEntity> addressEntities = addressRepository.findByState(state);
        return becomeToDtos(addressEntities);
    }

    public  List<AddressResponseDetailDto> getAllAddress(){
        List<AddressEntity> addressEntities = addressRepository.findAll();
        return becomeToDtos(addressEntities);

    }

    public List<AddressResponseDetailDto> becomeToDtos (List<AddressEntity> addressEntities){

        List<AddressResponseDetailDto> addressDtos = new ArrayList<>();

        for (int i=0; i < addressEntities.size() ; i++){
            AddressEntity addressEntity = addressEntities.get(i);
            AddressResponseDetailDto addressDto = new AddressResponseDetailDto();

            addressDto.setCity(addressEntity.getCity());
            addressDto.setCountry(addressEntity.getCountry());
            addressDto.setState(addressEntity.getState());
            addressDto.setId(addressEntity.getId());

            addressDtos.add(addressDto);

        }

        return addressDtos;
    }

}
