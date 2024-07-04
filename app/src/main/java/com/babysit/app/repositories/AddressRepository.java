package com.babysit.app.repositories;

import com.babysit.app.entities.AddressEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface AddressRepository extends
        JpaRepository<AddressEntity,Long>,
        JpaSpecificationExecutor<AddressEntity> {

    List<AddressEntity> findByCountry(String country);


    List<AddressEntity> findByState(String state);

    List<AddressEntity> findByCity(String city);
}
