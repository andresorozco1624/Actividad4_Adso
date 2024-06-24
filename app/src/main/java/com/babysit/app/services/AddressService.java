package com.babysit.app.services;

import com.babysit.app.contracts.AddressDto;
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

    public List<AddressDto> getAddressByState (String state){

        List<AddressEntity> addressEntities = addressRepository.findByState(state);
        return becomeToDtos(addressEntities);
    }

    public  List<AddressDto> getAllAddress(){
        List<AddressEntity> addressEntities = addressRepository.findAll();
        return becomeToDtos(addressEntities);

    }

    public List<AddressDto> becomeToDtos (List<AddressEntity> addressEntities){

        List<AddressDto> addressDtos = new ArrayList<>();

        for (int i=0; i < addressEntities.size() ; i++){
            AddressEntity addressEntity = addressEntities.get(i);
            AddressDto addressDto = new AddressDto();

            addressDto.setCity(addressEntity.getCity());
            addressDto.setCountry(addressEntity.getCountry());
            addressDto.setState(addressEntity.getState());
            addressDto.setId(addressEntity.getId());

            addressDtos.add(addressDto);

        }

        return addressDtos;
    }

}
